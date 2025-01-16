import axios, { AxiosPromise } from 'axios'
import { QueryFunctionContext } from '@tanstack/react-query'

export const backendUrl = import.meta.env.VITE_BACKEND_URL

export async function fetcher({ queryKey }: QueryFunctionContext) {
  const [url, params] = queryKey
  const res = await axios.get(`${backendUrl}/${url}`, {
    params: new URLSearchParams({ ...(params as Record<string, string>) })
  })
  return res?.data
}

export async function mutator<T, R>({
  url,
  method,
  data
}: {
  url: string
  method: string
  data?: T | Record<string, string>
}): AxiosPromise<R> {
  return axios({ method, url: `${backendUrl}/${url}`, data })
}
