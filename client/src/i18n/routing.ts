import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',

  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales
    '/': '/',
    '/blog': {
      en: '/blog',
      fr: '/blogue'
    },
    '/about': '/about',
    '/contact': '/contact',
    '/login': '/login'
  }
})

export type Pathnames = keyof typeof routing.pathnames

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
