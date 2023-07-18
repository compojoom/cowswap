import { useUpdateAtom } from 'jotai/utils'
import { useEffect } from 'react'

import { useAsyncMemo } from 'use-async-memo'

import { useExtensibleFallbackContext } from '../hooks/useExtensibleFallbackContext'
import { verifyExtensibleFallback } from '../services/verifyExtensibleFallback'
import { fallbackHandlerVerificationAtom } from '../state/fallbackHandlerVerificationAtom'

export function FallbackHandlerVerificationUpdater() {
  const update = useUpdateAtom(fallbackHandlerVerificationAtom)

  const extensibleFallbackContext = useExtensibleFallbackContext()
  const fallbackHandlerVerification = useAsyncMemo(
    () => (extensibleFallbackContext ? verifyExtensibleFallback(extensibleFallbackContext) : null),
    [extensibleFallbackContext],
    null
  )

  useEffect(() => {
    update(fallbackHandlerVerification)
  }, [fallbackHandlerVerification, update])

  return null
}