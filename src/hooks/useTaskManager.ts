'use client'

import { useReadContract, useWriteContract, useAccount } from 'wagmi'
import { parseEther } from 'viem'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../lib/contract'

export interface Task {
  id: bigint
  title: string
  stake: bigint
  completed: boolean
  createdAt: bigint
  completedAt: bigint
  owner: string
}

export function useTaskManager() {
  const { address } = useAccount()
  
  // Ler minhas tasks
  const { data: myTasks, refetch: refetchMyTasks } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getMyTasks',
    account: address,
  })

  // Ler todas as tasks
  const { data: allTasks, refetch: refetchAllTasks } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getAllTasks',
  })

  // Escrever no contrato
  const { writeContract, isPending } = useWriteContract()

  // Criar task
  const createTask = (title: string, stakeEth: string) => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'createTask',
      args: [title],
      value: parseEther(stakeEth),
    })
  }

  // Completar task
  const completeTask = (taskId: bigint) => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'completeTask',
      args: [taskId],
    })
  }

  const refetch = () => {
    refetchMyTasks()
    refetchAllTasks()
  }

  return {
    myTasks: (myTasks as Task[]) || [],
    allTasks: (allTasks as Task[]) || [],
    createTask,
    completeTask,
    isPending,
    refetch,
  }
}
