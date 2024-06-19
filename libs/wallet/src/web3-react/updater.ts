import { useSetAtom } from 'jotai'
import { useEffect, useMemo, useState } from 'react'

import { getCurrentChainIdFromUrl } from '@cowprotocol/common-utils'
import { getSafeInfo } from '@cowprotocol/core'
import { SupportedChainId } from '@cowprotocol/cow-sdk'
import { useENSName } from '@cowprotocol/ens'
import { useWeb3React } from '@web3-react/core'

import ms from 'ms.macro'

import { useIsSmartContractWallet } from './hooks/useIsSmartContractWallet'
import { useSafeAppsSdk } from './hooks/useSafeAppsSdk'
import { useWalletMetaData } from './hooks/useWalletMetadata'

import { gnosisSafeInfoAtom, walletDetailsAtom, walletInfoAtom } from '../api/state'
import { GnosisSafeInfo, WalletDetails, WalletInfo } from '../api/types'
import { getWalletType } from '../api/utils/getWalletType'
import { getWalletTypeLabel } from '../api/utils/getWalletTypeLabel'

// used for on-chain calls
const SAFE_INFO_LONG_INTERVAL = ms`30s`
// used for calls that don't require on-chain interactions
const SAFE_INFO_SHORT_INTERVAL = ms`5s`
let shortSafeInfoInterval: NodeJS.Timeout | null
let longSafeInfoInterval: NodeJS.Timeout | null

// Smart contract wallets are filtered out by default, no need to add them to this list
const UNSUPPORTED_WC_WALLETS = new Set(['DeFi Wallet', 'WallETH'])

function _checkIsSupportedWallet(walletName?: string): boolean {
  return !(walletName && UNSUPPORTED_WC_WALLETS.has(walletName))
}

function _useWalletInfo(): WalletInfo {
  const { account, chainId, isActive: active } = useWeb3React()
  const isChainIdUnsupported = !!chainId && !(chainId in SupportedChainId)

  return useMemo(
    () => ({
      chainId: isChainIdUnsupported || !chainId ? getCurrentChainIdFromUrl() : chainId,
      active,
      account,
    }),
    [chainId, active, account, isChainIdUnsupported]
  )
}

function _useWalletDetails(account?: string, standaloneMode?: boolean): WalletDetails {
  const { ENSName: ensName } = useENSName(account ?? undefined)
  const isSmartContractWallet = useIsSmartContractWallet()
  const { walletName, icon } = useWalletMetaData(standaloneMode)

  return useMemo(() => {
    return {
      isSmartContractWallet,
      walletName,
      icon,
      ensName: ensName || undefined,
      isSupportedWallet: _checkIsSupportedWallet(walletName),

      // TODO: For now, all SC wallets use pre-sign instead of offchain signing
      // In the future, once the API adds EIP-1271 support, we can allow some SC wallets to use offchain signing
      allowsOffchainSigning: !isSmartContractWallet,
    }
  }, [isSmartContractWallet, walletName, icon, ensName])
}

function _useSafeInfo(walletInfo: WalletInfo): GnosisSafeInfo | undefined {
  const { provider } = useWeb3React()
  const { account, chainId } = walletInfo
  const [safeInfo, setSafeInfo] = useState<GnosisSafeInfo>()
  const safeAppsSdk = useSafeAppsSdk()

  useEffect(() => {
    const updateSafeInfo = async () => {
      if (safeAppsSdk) {
        try {
          const appsSdkSafeInfo = await safeAppsSdk.safe.getInfo()
          setSafeInfo((prevSafeInfo) => {
            const { isReadOnly, nonce } = appsSdkSafeInfo
            const { safeAddress, threshold, owners } = appsSdkSafeInfo
            return {
              chainId,
              address: safeAddress,
              threshold,
              owners,
              nonce,
              isReadOnly,
            }
          })
        } catch (error) {
          console.debug(`[WalletUpdater] Error fetching safe info over iframe ${account}`)
          setSafeInfo(undefined)
        }
      } else {
        if (chainId && account && provider) {
          try {
            const _safeInfo = await getSafeInfo(chainId, account, provider)
            const { address, threshold, owners, nonce } = _safeInfo
            setSafeInfo((prevSafeInfo) => ({
              ...prevSafeInfo,
              chainId,
              address,
              threshold,
              owners,
              nonce,
              isReadOnly: false,
            }))
          } catch (error) {
            console.debug(`[WalletUpdater] Address ${account} is likely not a Safe (API didn't return Safe info)`)
            setSafeInfo(undefined)
          }
        } else {
          setSafeInfo(undefined)
        }
      }
    }

    if (safeAppsSdk) {
      // If we are here, we are running as a safe app. The safe app getInfo call doesn't do network requests
      // but uses the local data, so we can use a shorter interval
      clearInterval(longSafeInfoInterval !== null ? longSafeInfoInterval : undefined)
      longSafeInfoInterval = null
      shortSafeInfoInterval = setInterval(updateSafeInfo, SAFE_INFO_SHORT_INTERVAL)
    } else {
      // If we don't have a safeAppsSdk, we are running maybe in walletconnect mode and protocol-kit's
      // getSafeInfo call does network requests, so we use a longer interval to not spam the servers too much
      clearInterval(shortSafeInfoInterval !== null ? shortSafeInfoInterval : undefined)
      shortSafeInfoInterval = null
      longSafeInfoInterval = setInterval(updateSafeInfo, SAFE_INFO_LONG_INTERVAL)
    }

    updateSafeInfo()

    return () => {
      clearInterval(shortSafeInfoInterval !== null ? shortSafeInfoInterval : undefined)
      shortSafeInfoInterval = null
      clearInterval(longSafeInfoInterval !== null ? longSafeInfoInterval : undefined)
      longSafeInfoInterval = null
    }
  }, [setSafeInfo, chainId, account, provider, safeAppsSdk])

  return safeInfo
}

interface WalletUpdaterProps {
  standaloneMode?: boolean
}

export function WalletUpdater({ standaloneMode }: WalletUpdaterProps) {
  const walletInfo = _useWalletInfo()
  const walletDetails = _useWalletDetails(walletInfo.account, standaloneMode)
  const gnosisSafeInfo = _useSafeInfo(walletInfo)

  const setWalletInfo = useSetAtom(walletInfoAtom)
  const setWalletDetails = useSetAtom(walletDetailsAtom)
  const setGnosisSafeInfo = useSetAtom(gnosisSafeInfoAtom)

  // Update wallet info
  useEffect(() => {
    setWalletInfo(walletInfo)
  }, [walletInfo, setWalletInfo])

  // Update wallet details
  useEffect(() => {
    const walletType = getWalletType({ gnosisSafeInfo, isSmartContractWallet: walletDetails.isSmartContractWallet })
    setWalletDetails({
      walletName: getWalletTypeLabel(walletType), // Fallback wallet name, will be overridden by below line if something exists.
      ...walletDetails,
    })
  }, [walletDetails, setWalletDetails, gnosisSafeInfo])

  // Update Gnosis Safe info
  useEffect(() => {
    setGnosisSafeInfo(gnosisSafeInfo)
  }, [gnosisSafeInfo, setGnosisSafeInfo])

  return null
}
