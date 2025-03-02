import { useQuery } from '@tanstack/react-query'

export interface ProductListProcessedByAI {
  response: string
}

export default function useGetProductListProcessedByAI() {
  return useQuery<ProductListProcessedByAI>({
    queryKey: ['productListProcessedByAI']
  })
}
