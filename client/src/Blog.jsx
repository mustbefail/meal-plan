import { CreatePost } from './components/CreatePost.jsx'
import PostList from './components/PostList.jsx'
import PostFilter from './components/PostFilter.jsx'
import PostSorting from './components/PostSorting.jsx'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from './api/posts.js'
import { useState } from 'react'
import useDebounce from './hooks/useDebounce.js'

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  width: '50%',
  maxWidth: '600px'
}

export default function Blog() {
  const [author, setAuthor] = useState('')
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')

  const debAuthor = useDebounce(author, 500)

  const postsQuery = useQuery({
    queryKey: ['posts', { author: debAuthor, sortBy, sortOrder }],
    queryFn: () => getPosts({ author: debAuthor, sortBy, sortOrder })
  })
  const posts = postsQuery.data ?? []

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
      <PostList posts={posts} />
      <br />
    </div>
  )
}
