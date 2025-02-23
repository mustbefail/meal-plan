import { useState } from 'react'
import usePostRecord from '@/api/posts/usePostRecord'

export function CreatePost() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [contents, setContents] = useState('')

  const { mutateAsync, isPending, isSuccess } = usePostRecord()

  const handleSubmit = (e) => {
    e.preventDefault()
    mutateAsync({ title, author, contents })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="create-title">Title: </label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="create-author">Author: </label>
        <input
          type="text"
          name="create-author"
          id="create-author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <br />
      <textarea value={contents} onChange={(e) => setContents(e.target.value)} />
      <br />
      <br />
      <input type="submit" value={isPending ? 'Creating...' : 'Create'} disabled={!title || isPending} />
      {isSuccess ? (
        <>
          <br />
          Post created successfully!
        </>
      ) : null}
    </form>
  )
}
