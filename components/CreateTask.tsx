'use client'

import { useState } from 'react'
import { useTaskManager } from '@/hooks/useTaskManager'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

export function CreateTask() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [stake, setStake] = useState('0.0000001')
  const { createTask, isCreating, refetchTasksCount } = useTaskManager()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim() || !description.trim() || !deadline) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos",
        variant: "destructive"
      })
      return
    }

    try {
      // Converter data para timestamp
      const deadlineTimestamp = Math.floor(new Date(deadline).getTime() / 1000)
      
      if (deadlineTimestamp <= Math.floor(Date.now() / 1000)) {
        toast({
          title: "Erro",
          description: "Prazo deve ser no futuro",
          variant: "destructive"
        })
        return
      }

      await createTask(title, description, BigInt(deadlineTimestamp), stake)
      
      toast({
        title: "Sucesso!",
        description: "Tarefa criada com sucesso",
      })

      // Limpar formulário
      setTitle('')
      setDescription('')
      setDeadline('')
      
      // Atualizar contador - aguardar um pouco para a blockchain processar
      setTimeout(() => {
        refetchTasksCount()
      }, 2000)
      
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Erro ao criar tarefa",
        variant: "destructive"
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>➕ Criar Nova Tarefa</CardTitle>
        <CardDescription>
          Adicione uma nova tarefa na blockchain
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Estudar Solidity"
              disabled={isCreating}
            />
          </div>
          
          <div>
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: Completar curso de smart contracts"
              disabled={isCreating}
            />
          </div>

          <div>
            <Label htmlFor="stake">Stake</Label>
            <Input
              id="stake"
              value={stake}
              onChange={(e) => setStake(e.target.value)}
          
              placeholder="Ex: 0.0000001"
              disabled={isCreating}
            />
          </div>

          <div>
            <Label htmlFor="deadline">Prazo</Label>
            <Input
              id="deadline"
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              disabled={isCreating}
            />
          </div>

          
          <Button type="submit" disabled={isCreating} className="w-full">
            {isCreating ? 'Criando...' : 'Criar Tarefa'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}