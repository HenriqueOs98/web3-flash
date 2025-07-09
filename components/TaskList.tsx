'use client'

import { useTaskManager } from '@/hooks/useTaskManager'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'

export function TaskList() {
  const { tasksCount, useTask, completeTask, userAddress, refetchTasksCount } = useTaskManager()
  const { toast } = useToast()

  const handleCompleteTask = async (taskId: number) => {
    try {
      await completeTask(taskId)
      toast({
        title: "Sucesso!",
        description: "Tarefa marcada como concluída",
      })
      
      // Atualizar lista de tarefas após completar
      setTimeout(() => {
        refetchTasksCount()
      }, 2000)
      
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Erro ao completar tarefa",
        variant: "destructive"
      })
    }
  }

  const TaskItem = ({ taskId }: { taskId: number }) => {
    const { data: task, isLoading } = useTask(taskId)

    if (isLoading) {
      return (
        <Card>
          <CardContent className="p-4">
            <div className="animate-pulse">Carregando...</div>
          </CardContent>
        </Card>
      )
    }

    if (!task) return null

    const { id, title, description, createdAt, completedAt, status, creator, deadline } = task
    
    const isOwner = creator.toLowerCase() === userAddress?.toLowerCase()
    const isOverdue = !status && Number(deadline) < Math.floor(Date.now() / 1000)
    
    const formatDate = (timestamp: bigint) => {
      return new Date(Number(timestamp) * 1000).toLocaleString('pt-BR')
    }

    return (
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
            <div className="flex gap-2">
              {status ? (
                <Badge variant="default">✅ Concluída</Badge>
              ) : isOverdue ? (
                <Badge variant="destructive">⏰ Atrasada</Badge>
              ) : (
                <Badge variant="secondary">⏳ Pendente</Badge>
              )}
              {isOwner && <Badge variant="outline">👤 Sua</Badge>}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>📅 Criada: {formatDate(createdAt)}</p>
            <p>⏰ Prazo: {formatDate(deadline)}</p>
            {status && <p>✅ Concluída: {formatDate(completedAt)}</p>}
            <p>👤 Criador: {creator.slice(0, 6)}...{creator.slice(-4)}</p>
          </div>
          
          {!status && isOwner && (
            <Button 
              onClick={() => handleCompleteTask(Number(id))}
              className="mt-4 w-full"
            >
              Marcar como Concluída
            </Button>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">📋 Tarefas ({tasksCount})</h2>
      </div>
      
    { tasksCount && Number(tasksCount) === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">
              Nenhuma tarefa encontrada. Crie a primeira!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {Array.from({ length: Number(tasksCount) }, (_, i) => (
            <TaskItem key={i + 1} taskId={i + 1} />
          ))}
        </div>
      )}
    </div>
  )
}