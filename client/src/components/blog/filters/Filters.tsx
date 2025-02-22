import PostSorting from '@/components/blog/filters/PostSorting.tsx'
import { Button } from '@mui/material'

interface FiltersProps {
  filters: {
    author: string
    sortBy: string
    sortOrder: string
  }
  setters: {
    setAuthor: (author: string) => void
    setSortBy: (sortBy: string) => void
    setSortOrder: (sortOrder: string) => void
  }
}

export default function Filters({ filters, setters }: FiltersProps) {
  const { author, sortBy, sortOrder } = filters
  const { setAuthor, setSortBy, setSortOrder } = setters
  return (
    <div>
      <Button variant="contained">Text</Button>
      <PostSorting
        sortByFields={['createdAt', 'updatedAt']}
        orderByFields={['ascending', 'descending']}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    </div>
  )
}
