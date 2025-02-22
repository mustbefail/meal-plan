import { ChangeEventHandler } from 'react'

interface PostSortingProps {
  orderByFields: string[]
  sortByFields: string[]
  sortBy: string
  sortOrder: string
  setSortBy: (sortBy: string) => void
  setSortOrder: (sortOrder: string) => void
}

export default function PostSorting({
  sortByFields,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  orderByFields
}: PostSortingProps) {
  const sortByHandler: ChangeEventHandler<HTMLSelectElement> = (event) => setSortBy(event.target.value)
  const sortOrderHandler: ChangeEventHandler<HTMLSelectElement> = (event) => setSortOrder(event.target.value)
  return <div className="flex w-full flex-wrap gap-4 md:flex-nowrap"></div>
}
