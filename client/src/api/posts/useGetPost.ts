import { useQuery } from '@tanstack/react-query'
import { GetPostsQueryParams } from '@/components/blog/posts/hooks/usePosts'
import { PostResponse } from '@/api/posts/models'

export default function useGetPost(params: GetPostsQueryParams) {
  return useQuery<PostResponse[]>({
    queryKey: ['posts', params],
    enabled: Boolean(params)
  })
}
