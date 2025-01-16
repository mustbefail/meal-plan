import { useMutation, useQueryClient } from '@tanstack/react-query'
import { mutator } from '@/api'
import { Post, PostResponse } from './models.ts'

export default function useUpdatePost() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, post }: { id: string; post: Partial<Post> }) =>
      mutator<Post, PostResponse>({
        url: `posts/${id}`,
        method: 'PATCH',
        data: post
      }),
    onMutate: async (newPost) => {
      await queryClient.cancelQueries({ queryKey: ['posts'] })

      const previousPosts = queryClient.getQueriesData<PostResponse[]>({ queryKey: ['posts'], exact: false })

      queryClient.setQueriesData({ queryKey: ['posts'], exact: false }, (old: PostResponse[]) => {
        return old.map((post) => {
          if (post._id === newPost.id) {
            return { ...post, ...newPost.post }
          }
          return post
        })
      })
      return { previousPosts }
    },
    onError: (err, _, context) => {
      console.error(err)
      if (context) {
        queryClient.setQueryData(['posts'], context.previousPosts)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'], exact: false }).catch((err) => {
        console.error(err)
      })
    }
  })
}
