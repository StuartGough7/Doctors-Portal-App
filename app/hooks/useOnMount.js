import { useEffect } from 'react'

export function useOnMount(fn) {
  useEffect(fn, [])
}
