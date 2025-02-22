// import useDeletePost from '@/api/posts/useDeletePost.ts'
// import useUpdatePost from '@/api/posts/useUpdatePost.ts'

interface PostProps {
  title: string
  contents: string
  author?: string
  _id: string
}

export default function Post({ title, contents, author }: PostProps) {
  // const { mutateAsync: deletePost } = useDeletePost()
  // const { mutateAsync: updatePost } = useUpdatePost()

  return (
    <article className="flex flex-col gap-4 rounded-[2px] border-b-1 p-6">
      Written by <strong>{author || 'Anonymous'}</strong>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div>{contents}</div>
    </article>
  )
}
