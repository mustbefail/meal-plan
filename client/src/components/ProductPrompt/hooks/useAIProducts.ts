import useGetProductListProcessedByAI from '@/api/productList/useGetProductListProcessedByAI'
import usePostProductListToAI from '@/api/productList/usePostProductListToAI'

export default function useAIProducts() {
  const { mutateAsync: sendProductListToAI, isPending } = usePostProductListToAI()
  const { data, isLoading } = useGetProductListProcessedByAI()
  return {
    sendProductListToAI,
    isSending: isPending,
    data: JSON.parse(data?.response ?? '{"empty": true}'),
    isLoading
  }
}
