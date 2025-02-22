import { useState } from 'react'
import useDebounce from '@/hooks/useDebounce.ts'

export default function useFilters() {
  const [author, setAuthor] = useState<string>('')
  const debAuthor = useDebounce<typeof author>(author, 500)
  const [sortBy, setSortBy] = useState<string>('createdAt')
  const [sortOrder, setSortOrder] = useState<string>('descending')

  return {
    filters: {
      author,
      sortBy,
      sortOrder,
      debouncedAuthor: debAuthor
    },
    setters: {
      setAuthor,
      setSortBy,
      setSortOrder
    }
  }
}
