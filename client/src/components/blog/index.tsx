import CreatePost from './posts/CreatePost'
import PostList from './posts/PostList'
import PostFilter from './posts/PostFilter'
import PostSorting from './posts/PostSorting'
import { CSSProperties, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'

const containerStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto',
  width: '50%',
  maxWidth: '600px'
}

export default function Blog() {
  const [author, setAuthor] = useState('')
  const debAuthor = useDebounce(author, 500)
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')

  return (
    <div style={containerStyles}>
      <h1>Full stack blog app</h1>
      <CreatePost />
      <br />
      <hr />
      <span>Filter By:</span>
      <PostFilter field="author" author={author} setAuthor={setAuthor} />
      <br />
      <PostSorting
        sortByFields={['createdAt', 'updatedAt']}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <hr />
      <PostList filters={{ author: debAuthor as string, sortBy, sortOrder }} />
      <br />
    </div>
  )
}
