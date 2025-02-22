import { useEffect, useState } from 'react'

export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearInterval(debounceTimer)
    }
  }, [value, delay])

  return debouncedValue
}
