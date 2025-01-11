import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPost } from '../api/posts.js'
import { useState } from 'react'

export function CreatePost() {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')
  const queryClient = useQueryClient()

  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationFn: ({ author, title, contents }) => createPost({ author, title, contents }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] }).catch((err) => console.error(err))
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    await mutateAsync({ author, title, contents }).catch((err) => console.error(err))

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
    </form>
  )
}
