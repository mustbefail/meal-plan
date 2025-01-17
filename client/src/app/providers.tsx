'use client'

import { HeroUIProvider } from '@heroui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { useState } from 'react'
import { fetcher } from '@/api'
import { useRouter } from '@/i18n/routing'

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            queryFn: fetcher,
            retry: 0
          }
        }
      })
  )
  return (
    <HeroUIProvider navigate={router.push}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} position="right" />
      </QueryClientProvider>
    </HeroUIProvider>
  )
}
