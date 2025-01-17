import { useQuery } from '@tanstack/react-query'
import { isEmpty } from '@/utils'
import { GetPostsQueryParams } from '@/components/blog/posts/hooks/usePosts.ts'
import { PostResponse } from '@/api/posts/models.ts'

export default function useGetPost(params: GetPostsQueryParams) {
  return useQuery<PostResponse[]>({
    queryKey: ['posts', params],
    enabled: !isEmpty(params)
  })
}
