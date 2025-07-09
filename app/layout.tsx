// app/layout.tsx
import { Web3Provider } from '@/providers/Web3Provider'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TaskManager DApp',
  description: 'Gerencie suas tarefas na blockchain Ethereum (Sepolia)',
  keywords: ['blockchain', 'ethereum', 'web3', 'dapp', 'task manager'],
  authors: [{ name: 'Seu Nome' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Web3Provider>
          <main className="relative flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </Web3Provider>
      </body>
    </html>
  )
}