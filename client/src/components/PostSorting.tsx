import { ChangeEventHandler } from 'react'

interface PostSortingProps {
  sortByFields: string[]
  sortBy: string
  setSortBy: (sortBy: string) => void
  sortOrder: string
  setSortOrder: (sortOrder: string) => void
}

export default function PostSorting({ sortByFields, sortBy, setSortBy, sortOrder, setSortOrder }: PostSortingProps) {
  const sortByHandler: ChangeEventHandler<HTMLSelectElement> = (event) => setSortBy(event.target.value)
  const sortOrderHandler: ChangeEventHandler<HTMLSelectElement> = (event) => setSortOrder(event.target.value)
  return (
    <div>
      <label htmlFor="sortBy">Sort By:</label>
      <select name="sortBy" id="sortBy" value={sortBy} onChange={sortByHandler}>
        {sortByFields.map((field) => (
          <option key={field} value={field}>
            {field}
          </option>
        ))}
      </select>
      {' / '}
      <label htmlFor="sortOrder">Sort Order:</label>
      <select name="sortOrder" id="sortOrder" value={sortOrder} onChange={sortOrderHandler}>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  )
}
