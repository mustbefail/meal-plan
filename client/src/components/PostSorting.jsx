import PropTypes from 'prop-types'

export default function PostSorting({ sortByFields, sortBy, setSortBy, sortOrder, setSortOrder }) {
  const sortByHandler = (event) => setSortBy(event.target.value)
  const sortOrderHandler = (event) => setSortOrder(event.target.value)
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

PostSorting.propTypes = {
  sortByFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired,
  setSortOrder: PropTypes.func.isRequired
}
