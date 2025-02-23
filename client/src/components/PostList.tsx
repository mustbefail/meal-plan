import { Fragment } from 'react'
import { Post } from './Post.js'

export function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post, index) => (
        <Fragment key={post._id}>
          <Post {...post} />
          <hr />
        </Fragment>
      ))}
    </div>
  )
}
