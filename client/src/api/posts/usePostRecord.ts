import { useMutation, useQueryClient } from '@tanstack/react-query'
import { mutator } from '@/api'
import { Post, PostResponse } from '@/api/posts/models.ts'

export default function usePostRecord() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (post: Partial<Post>) => mutator<Post, PostResponse>({ url: 'posts', method: 'POST', data: post }),
    onMutate: async (newPost) => {
      await queryClient.cancelQueries({ queryKey: ['posts'] })

      const previousPosts = queryClient.getQueriesData<PostResponse[]>({ queryKey: ['posts'], exact: false })

      queryClient.setQueriesData({ queryKey: ['posts'], exact: false }, (old: PostResponse[]) => {
        return [newPost, ...old]
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
      queryClient
        .invalidateQueries({
          queryKey: ['posts'],
          exact: false
        })
        .catch((err) => {
          console.error(err)
        })
    }
  })
}
