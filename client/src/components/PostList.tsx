import Post from './Post.jsx'
import { Fragment } from 'react'
import usePosts from './posts/hooks/usePosts.ts'

interface PostListProps {
  filters: {
    author: string
    sortBy: string
    sortOrder: string
  }
}

export default function PostList({ filters }: PostListProps) {
  const { data, isLoading, isError } = usePosts({ ...filters })
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching posts</div>}
      {data.length === 0 && !isLoading && <div>No posts found</div>}
      {data.map((post) => (
        <Fragment key={post._id}>
          <Post {...post} key={post._id} />
          <hr />
        </Fragment>
      ))}
    </div>
  )
}
