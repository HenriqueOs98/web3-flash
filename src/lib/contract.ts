export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}` || '0x0000000000000000000000000000000000000000'

export const CONTRACT_ABI = [
  {
    "type": "function",
    "name": "createTask",
    "inputs": [{"name": "_title", "type": "string"}],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function", 
    "name": "completeTask",
    "inputs": [{"name": "_taskId", "type": "uint256"}],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getMyTasks", 
    "inputs": [],
    "outputs": [{"name": "", "type": "tuple[]", "components": [
      {"name": "id", "type": "uint256"},
      {"name": "title", "type": "string"},
      {"name": "stake", "type": "uint256"}, 
      {"name": "completed", "type": "bool"},
      {"name": "createdAt", "type": "uint256"},
      {"name": "completedAt", "type": "uint256"},
      {"name": "owner", "type": "address"}
    ]}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getAllTasks",
    "inputs": [],
    "outputs": [{"name": "", "type": "tuple[]", "components": [
      {"name": "id", "type": "uint256"},
      {"name": "title", "type": "string"},
      {"name": "stake", "type": "uint256"},
      {"name": "completed", "type": "bool"},
      {"name": "createdAt", "type": "uint256"},
      {"name": "completedAt", "type": "uint256"},
      {"name": "owner", "type": "address"}
    ]}],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "TaskCreated",
    "inputs": [
      {"name": "id", "type": "uint256", "indexed": true},
      {"name": "owner", "type": "address", "indexed": true},
      {"name": "title", "type": "string", "indexed": false},
      {"name": "stake", "type": "uint256", "indexed": false}
    ]
  },
  {
    "type": "event", 
    "name": "TaskCompleted",
    "inputs": [
      {"name": "id", "type": "uint256", "indexed": true},
      {"name": "owner", "type": "address", "indexed": true},
      {"name": "stake", "type": "uint256", "indexed": false}
    ]
  }
] as const
