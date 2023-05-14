import { atomWithStorage } from 'jotai/utils'

export const componentActivation = atomWithStorage<
  'log' | 'reg' | 'forg' | 'dash'
>('@activation', 'log')

export const signupStages = atomWithStorage<'phone' | 'code' | 'pass'>(
  '@activation',
  'pass'
)
