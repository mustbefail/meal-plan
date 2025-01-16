import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Blog from './Blog'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { fetcher } from './api'
import { useState } from 'react'

export default function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            queryFn: fetcher
          }
        }
      })
  )
  return (
    <QueryClientProvider client={queryClient}>
      <Blog />
      <ReactQueryDevtools initialIsOpen={false} position="right" />
    </QueryClientProvider>
  )
}
