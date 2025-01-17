import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Providers } from '@/app/providers.tsx'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'My blog app',
  description: 'My App is a...'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
