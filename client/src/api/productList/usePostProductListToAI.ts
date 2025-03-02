import { mutator } from '@/api/index'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosPromise } from 'axios'

interface PostProductListToAIVariables {
  productList: string
  preparedDishWeight: number
}

interface PostProductListToAIResponse {
  response: string
}

export default function usePostProductListToAI() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (variables: PostProductListToAIVariables): AxiosPromise<PostProductListToAIResponse> =>
      mutator<PostProductListToAIVariables, PostProductListToAIResponse>({
        url: 'generate',
        method: 'POST',
        data: variables
      }),
    onSettled: (data) => {
      queryClient.setQueryData(['productListProcessedByAI'], { ...data?.data })
    }
  })
}
