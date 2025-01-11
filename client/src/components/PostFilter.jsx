import PropTypes from 'prop-types'

export default function PostFilter({ field, author, setAuthor }) {
  const onChangeHandler = (event) => setAuthor(event.target.value)
  return (
    <div>
      <label htmlFor={`filter-${field}`}>{field}:</label>
      <input type="text" value={author} name={`filter-${field}`} id={`filter-${field}`} onChange={onChangeHandler} />
    </div>
  )
}

PostFilter.propTypes = {
  field: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  setAuthor: PropTypes.func.isRequired
}
