import { CSSProperties } from 'react'
import useDeletePost from '@/api/posts/useDeletePost.ts'
import useUpdatePost from '@/api/posts/useUpdatePost.ts'

const postStyles: CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid #333',
  borderRadius: '5px',
  padding: '20px 40px',
  width: '500px'
}

const deleteButtonStyles: CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer'
}

const editButtonStyles: CSSProperties = {
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  cursor: 'pointer'
}

interface PostProps {
  title: string
  contents: string
  author?: string
  _id: string
}

export default function Post({ title, contents, author, _id }: PostProps) {
  const { mutateAsync: deletePost } = useDeletePost()
  const { mutateAsync: updatePost } = useUpdatePost()

  const deleteHandler = async () => {
    await deletePost(_id).catch((err) => {
      console.error(err)
    })
  }

  const editHandler = () => {
    const newTitle = prompt('Enter new title:', title)
    const newContents = prompt('Enter new contents:', contents)

    if (newTitle && newContents) {
      updatePost({ id: _id, post: { title: newTitle, contents: newContents } }).catch((err) => {
        console.error(err)
      })
    }
  }

  return (
    <article style={postStyles}>
      <h2>{title}</h2>
      <div>{contents}</div>
      {author && (
        <em style={{ alignSelf: 'flex-end' }}>
          Written by <strong>{author}</strong>
        </em>
      )}
      <i style={deleteButtonStyles} onClick={deleteHandler}>
        x
      </i>
      <em style={editButtonStyles} onClick={editHandler}>
        Edit
      </em>
    </article>
  )
}
