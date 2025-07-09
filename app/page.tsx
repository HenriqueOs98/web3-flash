'use client'

import { WalletConnection } from '@/components/WalletConnection'
import { CreateTask } from '@/components/CreateTask'
import { TaskList } from '@/components/TaskList'
import { useAccount } from 'wagmi'
import { Toaster } from '@/components/ui/toaster'
import { Button } from '@/components/ui/button'
import { useTaskManager } from '@/hooks/useTaskManager'
import { useState } from 'react'

export default function Home() {
  const { isConnected } = useAccount()
  const { refetchTasksCount } = useTaskManager()
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = async () => {
    setIsRefreshing(true)
    try {
      await refetchTasksCount()
    } finally {
      setIsRefreshing(false)
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">📝 TaskManager DApp</h1>
          <p className="text-muted-foreground">
            Gerencie suas tarefas na blockchain Ethereum (Sepolia)
          </p>
        </div>

        {/* Conexão da Carteira */}
        <WalletConnection />

        {/* Interface principal (só aparece se conectado) */}
        {isConnected ? (
          <div className="space-y-6">
            {/* Botão de Atualizar */}
            <div className="flex justify-center">
              <Button 
                onClick={handleRefresh}
                disabled={isRefreshing}
                variant="outline"
                className="gap-2"
              >
                {isRefreshing ? (
                  <>🔄 Atualizando...</>
                ) : (
                  <>🔄 Atualizar Tarefas</>
                )}
              </Button>
            </div>

            {/* Grid com CreateTask e TaskList */}
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <CreateTask />
              </div>
              <div>
                <TaskList />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center p-8">
            <p className="text-muted-foreground">
              Conecte sua carteira para começar a usar o TaskManager
            </p>
          </div>
        )}
      </div>
      
      <Toaster />
    </div>
  )
}