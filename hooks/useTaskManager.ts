
import { useWriteContract, useReadContract, useAccount } from "wagmi";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/lib/web3";
import { parseEther, formatEther } from 'viem'

export interface Task {
    id: number;
    title: string;
    description: string;
    createdAt: bigint;
    completedAt: bigint;
    status: boolean;
    creator: string;
    deadline: bigint;
    
}

export function useTaskManager() {
  const { address } = useAccount()

  const { writeContract, isPending: isCreating } = useWriteContract()

  const createTask = async (title: string, description: string, deadline: bigint, stakeAmount: string) => {
    if(!address) {
      throw new Error("No address found")
    }

    const stakeInWei = parseEther(stakeAmount)

    const minimumStake = parseEther("0.0000001")

    if(stakeInWei < minimumStake) {
      throw new Error("Valor do stake deve ser maior que 0.0000001 ETH")
    }

    const currentTimestamp = Math.floor(Date.now() / 1000)

    if(deadline <= currentTimestamp) {
      throw new Error("Prazo deve ser maior que a data atual")
    }

   return writeContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "createTask",
    args: [title, description, BigInt(deadline)],
    value: stakeInWei,
   })

}

const completeTask = async (taskId: number) => {
  if(!address) {
    throw new Error("No address found")
  }

  return writeContract({
    address: CONTRACT_ADDRESS,                    
    abi: CONTRACT_ABI,                           
    functionName: 'completeTask',                
    args: [BigInt(taskId)],                      
  })

}

const {data: tasksCount, refetch: refetchTasksCount} = useReadContract({
  address: CONTRACT_ADDRESS,
  abi: CONTRACT_ABI,
  functionName: 'getTaskCount',
})

const useTask = (taskId: number) => {
    return useReadContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'getTask',
        args: [BigInt(taskId)],
        query: {
            enabled: taskId > 0,
        }
    })
}

return {
    createTask,
    completeTask,
    tasksCount,
    refetchTasksCount,
    useTask,
    isCreating,
    userAddress: address,
}

}


