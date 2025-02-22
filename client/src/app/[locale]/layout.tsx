import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Providers } from '@/app/providers.tsx'
import { NextIntlClientProvider } from 'next-intl'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '@/theme.ts'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

export const metadata: Metadata = {
  title: 'My blog app',
  description: 'My App is a...'
}

export default async function RootLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  const { locale } = await params
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: false }}>
          <ThemeProvider theme={theme} defaultMode="system">
            <InitColorSchemeScript attribute="class" />
            <NextIntlClientProvider locale={locale} messages={{}}>
              <Providers>
                <CssBaseline />
                <div id="root">{children}</div>
              </Providers>
            </NextIntlClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
