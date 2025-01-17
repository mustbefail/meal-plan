import useGetPost from '../../../../api/posts/useGetPost.ts'

export interface GetPostsQueryParams extends Record<string, string> {
  author: string
  sortBy: string
  sortOrder: string
}

export default function usePosts(params: GetPostsQueryParams) {
  const { data, isLoading, isError } = useGetPost(params)

  return { data: data ?? [], isLoading, isError }
}
