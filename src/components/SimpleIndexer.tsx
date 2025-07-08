'use client'

import { useEffect, useState } from 'react'
import { usePublicClient } from 'wagmi'
import { formatEther } from 'viem'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../lib/contract'

interface IndexedTask {
  id: string
  title: string
  stake: bigint
  owner: string
  completed: boolean
  txHash: string
}

export function SimpleIndexer() {
  const [tasks, setTasks] = useState<IndexedTask[]>([])
  const [loading, setLoading] = useState(false)
  const publicClient = usePublicClient()

  const indexTasks = async () => {
    if (!publicClient) return
    
    setLoading(true)
    try {
      // Buscar eventos TaskCreated
      const createdEvents = await publicClient.getLogs({
        address: CONTRACT_ADDRESS,
        event: {
          type: 'event',
          name: 'TaskCreated',
          inputs: [
            { name: 'id', type: 'uint256', indexed: true },
            { name: 'owner', type: 'address', indexed: true },
            { name: 'title', type: 'string' },
            { name: 'stake', type: 'uint256' }
          ]
        },
        fromBlock: BigInt(0),
        toBlock: "latest"
      })

      // Buscar eventos TaskCompleted
      const completedEvents = await publicClient.getLogs({
        address: CONTRACT_ADDRESS,
        event: {
          type: 'event',
          name: 'TaskCompleted',
          inputs: [
            { name: 'id', type: 'uint256', indexed: true },
            { name: 'owner', type: 'address', indexed: true },
            { name: 'stake', type: 'uint256' }
          ]
        },
        fromBlock: BigInt(0),
        toBlock: "latest"
      })

      // Mapear tasks criadas
      const tasksMap = new Map<string, IndexedTask>()
      
      createdEvents.forEach((event) => {
        const args = event.args as any
        tasksMap.set(args.id.toString(), {
          id: args.id.toString(),
          title: args.title,
          stake: args.stake,
          owner: args.owner,
          completed: false,
          txHash: event.transactionHash
        })
      })

      // Marcar tasks completadas
      completedEvents.forEach((event) => {
        const args = event.args as any
        const task = tasksMap.get(args.id.toString())
        if (task) {
          task.completed = true
        }
      })

      setTasks(Array.from(tasksMap.values()))
    } catch (error) {
      console.error('Erro ao indexar:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    indexTasks()
  }, [publicClient])

  // Calcular apenas stakes de tasks NÃO completadas (ainda travadas no contrato)
  const activeTasks = tasks.filter(t => !t.completed)
  const completedTasks = tasks.filter(t => t.completed)
  
  const totalStakeActive = activeTasks.reduce((sum, task) => sum + task.stake, BigInt(0))
  const totalStakeReturned = completedTasks.reduce((sum, task) => sum + task.stake, BigInt(0))

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">📊 Indexador</h3>
        <button
          onClick={indexTasks}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? '⏳' : '🔄'} Atualizar
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-3 bg-blue-50 rounded">
          <div className="text-2xl font-bold text-blue-600">{tasks.length}</div>
          <div className="text-sm text-blue-700">Total Tasks</div>
        </div>
        <div className="text-center p-3 bg-amber-50 rounded">
          <div className="text-2xl font-bold text-amber-600">{activeTasks.length}</div>
          <div className="text-sm text-amber-700">Ativas</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded">
          <div className="text-2xl font-bold text-green-600">{completedTasks.length}</div>
          <div className="text-sm text-green-700">Completadas</div>
        </div>
        <div className="text-center p-3 bg-purple-50 rounded">
          <div className="text-lg font-bold text-purple-600">{formatEther(totalStakeActive)}</div>
          <div className="text-sm text-purple-700">ETH Travado</div>
        </div>
      </div>
      
      {/* Estatísticas adicionais */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">💰 ETH Travado no Contrato:</span>
            <span className="font-semibold text-purple-600">{formatEther(totalStakeActive)} ETH</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">🎉 ETH Devolvido aos Usuários:</span>
            <span className="font-semibold text-green-600">{formatEther(totalStakeReturned)} ETH</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 max-h-64 overflow-y-auto">
        {tasks.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {loading ? '⏳ Carregando...' : '📭 Nenhuma task encontrada'}
          </div>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className={`p-3 rounded border ${
              task.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">
                    {task.completed ? '✅' : '⏳'} #{task.id}: {task.title}
                  </h4>
                  <div className="text-sm text-gray-600 mt-1">
                    {task.completed ? (
                      <span className="text-green-600">
                        🎉 {formatEther(task.stake)} ETH devolvido • 👤 {task.owner.slice(0, 6)}...{task.owner.slice(-4)}
                      </span>
                    ) : (
                      <span className="text-purple-600">
                        💰 {formatEther(task.stake)} ETH travado • 👤 {task.owner.slice(0, 6)}...{task.owner.slice(-4)}
                      </span>
                    )}
                  </div>
                  <a
                    href={`https://sepolia.etherscan.io/tx/${task.txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    🔗 Ver no Etherscan
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
