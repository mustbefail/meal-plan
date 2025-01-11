import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Blog from './Blog'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Blog />
      <ReactQueryDevtools initialIsOpen={false} position="right" />
    </QueryClientProvider>
  )
}
