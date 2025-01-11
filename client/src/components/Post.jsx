import PropTypes from 'prop-types'

const postStyles = {
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid #333',
  borderRadius: '5px',
  padding: '20px 40px',
  width: '500px'
}

export default function Post({ title, contents, author }) {
  return (
    <article style={postStyles}>
      <h2>{title}</h2>
      <div>{contents}</div>
      {author && (
        <em style={{ alignSelf: 'flex-end' }}>
          Written by <strong>{author}</strong>
        </em>
      )}
    </article>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  author: PropTypes.string
}
