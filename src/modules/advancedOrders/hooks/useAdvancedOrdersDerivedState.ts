import { useAtomValue, useUpdateAtom } from 'jotai/utils'
import { useEffect } from 'react'

import { useBuildTradeDerivedState } from 'modules/trade/hooks/useBuildTradeDerivedState'

import {
  AdvancedOrdersDerivedState,
  advancedOrdersAtom,
  advancedOrdersDerivedStateAtom,
} from '../state/advancedOrdersAtom'

export function useAdvancedOrdersDerivedState(): AdvancedOrdersDerivedState {
  return useAtomValue(advancedOrdersDerivedStateAtom)
}

export function useFillAdvancedOrdersDerivedState() {
  const rawState = useAtomValue(advancedOrdersAtom)
  const updateDerivedState = useUpdateAtom(advancedOrdersDerivedStateAtom)

  const derivedState = useBuildTradeDerivedState(advancedOrdersAtom)
  const isUnlocked = rawState.isUnlocked

  useEffect(() => {
    updateDerivedState({ ...derivedState, isUnlocked })
  }, [derivedState, isUnlocked, updateDerivedState])
}
