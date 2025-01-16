import { mutator } from '@/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useDeletePost() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => mutator({ url: `posts/${id}`, method: 'DELETE' }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] }).catch((err) => {
        console.error(err)
      })
    }
  })
}
