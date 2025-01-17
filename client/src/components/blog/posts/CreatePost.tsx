import { FormEvent, useState } from 'react'
import useCreatePost from '@/components/blog/posts/hooks/useCreatePost.ts'

export default function CreatePost() {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')
  const { createPost, isPending, isError, isSuccess } = useCreatePost()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    await createPost({ author, title, contents }).catch((err) => console.error(err))

    setAuthor('')
    setTitle('')
    setContents('')
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
          onChange={({ target }) => setTitle(target.value)}
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
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <br />
      <textarea rows={5} cols={80} value={contents} onChange={({ target }) => setContents(target.value)} />
      <br />
      <br />
      <input type="submit" value={isPending ? 'Creating...' : 'Create'} disabled={isPending || !title} />
      {isSuccess ? (
        <>
          <br />
          Post created successfully!
        </>
      ) : null}
      {isError ? (
        <>
          <br />
          Error creating post!
        </>
      ) : null}
    </form>
  )
}
