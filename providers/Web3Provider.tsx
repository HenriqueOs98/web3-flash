// providers/Web3Provider.tsx
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from '@/lib/web3'
import { ReactNode, useState } from 'react'

interface Web3ProviderProps {
  children: ReactNode
}

export function Web3Provider({ children }: Web3ProviderProps) {
  // Configurar QueryClient com otimizações
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        // Não refetch automático quando a janela ganha foco
        refetchOnWindowFocus: false,
        // Retry automático para requests falhados
        retry: 3,
        // Cache por 5 minutos
        staleTime: 1000 * 60 * 5,
        // Tempo antes de considerar obsoleto
        gcTime: 1000 * 60 * 10,
      },
      mutations: {
        // Retry para mutações falhadas
        retry: 1,
      },
    },
  }))

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}