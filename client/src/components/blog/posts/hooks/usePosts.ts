import useGetPost from '@/api/posts/useGetPost.ts'

export interface GetPostsQueryParams extends Record<string, string> {
  author: string
  sortBy: string
  sortOrder: string
  debouncedAuthor: string
}

export default function usePosts(params: GetPostsQueryParams) {
  const { data, isLoading, isError } = useGetPost({ ...params, author: params.debouncedAuthor })

  return { data: data ?? [], isLoading, isError }
}
