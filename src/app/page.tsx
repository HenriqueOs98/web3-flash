'use client'

import { useState } from 'react'
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
import { useTaskManager } from '../hooks/useTaskManager'
import { SimpleIndexer } from '../components/SimpleIndexer'
import { formatEther } from 'viem'

export default function Home() {
  const [title, setTitle] = useState('')
  const [stake, setStake] = useState('0.01')
  
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const { data: balance, refetch: refetchBalance } = useBalance({ address })
  const { myTasks, createTask, completeTask, isPending, refetch } = useTaskManager()

  const handleCreateTask = () => {
    if (title.trim() && stake) {
      createTask(title, stake)
      setTitle('')
      setTimeout(() => {
        refetch()
        refetchBalance()
      }, 2000) // Refetch after 2 seconds
    }
  }

  const handleCompleteTask = (taskId: bigint) => {
    completeTask(taskId)
    setTimeout(() => {
      refetch()
      refetchBalance()
    }, 2000) // Refetch after 2 seconds
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">🎯 Simple Task Manager</h1>
          <p className="text-gray-600 mb-6">
            Gerencie suas tarefas na blockchain com stake em ETH
          </p>
          <button
            onClick={() => connect({ connector: connectors[0] })}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            🦊 Conectar MetaMask
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">🎯 Simple Task Manager</h1>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">
                  👤 {address?.slice(0, 6)}...{address?.slice(-4)}
                </div>
                <div className="text-sm font-semibold text-green-600">
                  💰 {balance ? formatEther(balance.value) : '0'} ETH
                </div>
              </div>
              <button
                onClick={() => disconnect()}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Desconectar
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Criar Task */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📝 Criar Nova Task</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título da Task
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Estudar Solidity"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stake (ETH)
                </label>
                <input
                  type="number"
                  step="0.001"
                  value={stake}
                  onChange={(e) => setStake(e.target.value)}
                  placeholder="0.01"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-blue-600 mt-1">
                  💡 Este valor será devolvido quando você completar a task
                </p>
              </div>
              
              <button
                onClick={handleCreateTask}
                disabled={isPending || !title.trim()}
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-colors"
              >
                {isPending ? '⏳ Criando...' : '🚀 Criar Task'}
              </button>
            </div>
          </div>

          {/* Minhas Tasks */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Minhas Tasks</h2>
            
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {myTasks.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-4xl mb-2">📭</div>
                  <p>Nenhuma task criada ainda</p>
                </div>
              ) : (
                myTasks.map((task) => (
                  <div 
                    key={task.id.toString()} 
                    className={`p-4 rounded-lg border-2 ${
                      task.completed 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-yellow-50 border-yellow-200'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {task.completed ? '✅' : '⏳'} {task.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          💰 Stake: {formatEther(task.stake)} ETH
                        </p>
                        {task.completed ? (
                          <p className="text-xs text-green-600 font-medium">
                            🎉 Stake devolvido! Você recebeu {formatEther(task.stake)} ETH de volta
                          </p>
                        ) : (
                          <p className="text-xs text-amber-600">
                            💡 Complete para receber {formatEther(task.stake)} ETH de volta
                          </p>
                        )}
                        <p className="text-xs text-gray-500">
                          ID: #{task.id.toString()}
                        </p>
                      </div>
                      
                      {!task.completed && (
                        <button
                          onClick={() => handleCompleteTask(task.id)}
                          disabled={isPending}
                          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
                        >
                          {isPending ? '⏳' : '✅'} Completar
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <button
              onClick={() => {
                refetch()
                refetchBalance()
              }}
              className="w-full mt-4 bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
            >
              🔄 Atualizar Tasks e Saldo
            </button>
          </div>
        </div>

        {/* Indexador */}
        <div className="mt-8">
          <SimpleIndexer />
        </div>
      </div>
    </div>
  )
}
