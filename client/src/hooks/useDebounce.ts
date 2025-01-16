import { useEffect, useState } from 'react'

export default function useDebounce(value: string | number, delay: number) {
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
