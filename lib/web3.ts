// lib/web3.ts
import { createConfig, http } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

const requiredEnvVars = {
    rpcUrl: process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL,
    contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
}

if (!requiredEnvVars.rpcUrl || !requiredEnvVars.contractAddress) {
    throw new Error('Environment variables are not set')
}

export const config = createConfig({
  chains: [sepolia],
  connectors: [
    metaMask(),
   
  ],
  transports: {
    [sepolia.id]: http(requiredEnvVars.rpcUrl),
    
    
  },
  ssr: true,
})

// Dados do contrato
export const CONTRACT_ADDRESS = requiredEnvVars.contractAddress as `0x${string}`

export const CONTRACT_ABI = [
  {
    "type": "function",
    "name": "MINIMUM_STAKE",
    "inputs": [],
    "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "completeTask",
    "inputs": [{"name": "_id", "type": "uint256", "internalType": "uint256"}],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createTask",
    "inputs": [
      {"name": "_title", "type": "string", "internalType": "string"},
      {"name": "_description", "type": "string", "internalType": "string"},
      {"name": "_deadline", "type": "uint256", "internalType": "uint256"}
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "getContractBalance",
    "inputs": [],
    "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getStakeInfo",
    "inputs": [{"name": "_id", "type": "uint256", "internalType": "uint256"}],
    "outputs": [
      {"name": "stakeAmount", "type": "uint256", "internalType": "uint256"},
      {"name": "returned", "type": "bool", "internalType": "bool"},
      {"name": "canBeReturned", "type": "bool", "internalType": "bool"}
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTask",
    "inputs": [{"name": "_id", "type": "uint256", "internalType": "uint256"}],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct TaskManager.Task",
        "components": [
          {"name": "id", "type": "uint256", "internalType": "uint256"},
          {"name": "title", "type": "string", "internalType": "string"},
          {"name": "description", "type": "string", "internalType": "string"},
          {"name": "createdAt", "type": "uint256", "internalType": "uint256"},
          {"name": "completedAt", "type": "uint256", "internalType": "uint256"},
          {"name": "status", "type": "bool", "internalType": "bool"},
          {"name": "creator", "type": "address", "internalType": "address"},
          {"name": "deadline", "type": "uint256", "internalType": "uint256"},
          {"name": "stakeAmount", "type": "uint256", "internalType": "uint256"},
          {"name": "stakeReturned", "type": "bool", "internalType": "bool"}
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTaskCount",
    "inputs": [],
    "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isTaskOverdue",
    "inputs": [{"name": "_id", "type": "uint256", "internalType": "uint256"}],
    "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "processOverdueTask",
    "inputs": [{"name": "_id", "type": "uint256", "internalType": "uint256"}],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "taskCount",
    "inputs": [],
    "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tasks",
    "inputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
    "outputs": [
      {"name": "id", "type": "uint256", "internalType": "uint256"},
      {"name": "title", "type": "string", "internalType": "string"},
      {"name": "description", "type": "string", "internalType": "string"},
      {"name": "createdAt", "type": "uint256", "internalType": "uint256"},
      {"name": "completedAt", "type": "uint256", "internalType": "uint256"},
      {"name": "status", "type": "bool", "internalType": "bool"},
      {"name": "creator", "type": "address", "internalType": "address"},
      {"name": "deadline", "type": "uint256", "internalType": "uint256"},
      {"name": "stakeAmount", "type": "uint256", "internalType": "uint256"},
      {"name": "stakeReturned", "type": "bool", "internalType": "bool"}
    ],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "StakeLost",
    "inputs": [
      {"name": "id", "type": "uint256", "indexed": false, "internalType": "uint256"},
      {"name": "stakeAmount", "type": "uint256", "indexed": false, "internalType": "uint256"},
      {"name": "reason", "type": "string", "indexed": false, "internalType": "string"}
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TaskCompleted",
    "inputs": [
      {"name": "id", "type": "uint256", "indexed": false, "internalType": "uint256"},
      {"name": "completedAt", "type": "uint256", "indexed": false, "internalType": "uint256"},
      {"name": "stakeReturned", "type": "uint256", "indexed": false, "internalType": "uint256"}
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TaskCreated",
    "inputs": [
      {"name": "id", "type": "uint256", "indexed": false, "internalType": "uint256"},
      {"name": "title", "type": "string", "indexed": false, "internalType": "string"},
      {"name": "description", "type": "string", "indexed": false, "internalType": "string"},
      {"name": "createdAt", "type": "uint256", "indexed": false, "internalType": "uint256"},
      {"name": "creator", "type": "address", "indexed": false, "internalType": "address"},
      {"name": "stakeAmount", "type": "uint256", "indexed": false, "internalType": "uint256"}
    ],
    "anonymous": false
  }
] as const