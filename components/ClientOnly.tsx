import { useIsMounted } from '@/hooks/useIsMounted'
import { ReactNode } from 'react'

interface ClientOnlyProps {
  children: ReactNode
  fallback?: ReactNode
}

export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const isMounted = useIsMounted()

  if (!isMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

