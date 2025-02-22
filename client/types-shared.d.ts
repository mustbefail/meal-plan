import type { useRouter } from '@/i18n/routing.ts'

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>
  }
}
