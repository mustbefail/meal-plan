import usePostRecord from '@/api/posts/usePostRecord.ts'

export default function useCreatePost() {
  const { mutateAsync, isPending, isSuccess, isError } = usePostRecord()
  return {
    createPost: mutateAsync,
    isPending,
    isError,
    isSuccess
  }
}
