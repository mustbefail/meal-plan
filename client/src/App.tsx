import { Container } from '@mui/material'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import ProductPrompt from '@/components/ProductPrompt/ProductPrompt'

export function App() {
  const [queryClient] = useState(new QueryClient({}))
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
        <ProductPrompt />
        {/*<CaloriesCalculator />*/}
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
