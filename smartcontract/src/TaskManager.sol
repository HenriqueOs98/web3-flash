// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;



event TaskCreated(uint256 id, string title, address creator, uint256 stakeAmount, uint256 deadline);
event TaskCompleted(uint256 id, uint256 stakeReturned);
event StakeLost(uint256 id, uint256 stakeAmount);

contract TaskManager {
    struct Task {
        uint256 id;
        string title;
        string description;
        uint256 createdAt;
        uint256 deadline;     // Prazo para conclusão
        bool status;          // false = pendente, true = concluída
        address creator;
        uint256 stakeAmount;
        bool stakeReturned;
    }

    mapping(uint256 => Task) public tasks;
    mapping(address => uint256[]) public userTasks; // tarefas de cada usuário
    uint256 public taskCount = 0;
    
    uint256 public constant MINIMUM_STAKE = 0.001 ether;

    function createTask(
        string memory _title, 
        string memory _description, 
        uint256 _deadline) public payable {
        // require(msg.value >= MINIMUM_STAKE, "Valor minimo e 0.001 ether");
        if(msg.value < 0.0000001 ether) {
            revert("Valor minimo e 0.0000001 ether");
        }
        require(_deadline > block.timestamp, "Prazo deve ser maior que agora");
        
        taskCount++;
        tasks[taskCount] = Task({
            id: taskCount,
            title: _title,
            description: _description,
            createdAt: block.timestamp,
            deadline: _deadline,
            status: false,
            creator: msg.sender,
            stakeAmount: msg.value,
            stakeReturned: false
        });

        userTasks[msg.sender].push(taskCount);

        emit TaskCreated(taskCount, _title, msg.sender, msg.value, _deadline);
    }

    function completeTask(uint256 _id) public {
        Task storage task = tasks[_id];
        require(task.creator == msg.sender, "Apenas o criador pode completar");
        require(!task.status, "Tarefa ja concluida");
        require(!task.stakeReturned, "Stake ja foi processado");
        
        task.status = true;
        task.stakeReturned = true;
        
        // Verificar se completou no prazo
        if (block.timestamp <= task.deadline) {
            // ✅ NO PRAZO - Devolver stake
            (bool success, ) = payable(task.creator).call{value: task.stakeAmount}("");
            require(success, "Falha ao devolver stake");
            
            emit TaskCompleted(_id, task.stakeAmount);
        } else {
            // ❌ ATRASADO - Perder stake
            emit TaskCompleted(_id, 0);
            emit StakeLost(_id, task.stakeAmount);
        }
    }

    function getUserTasks(address _user) public view returns (uint256[] memory) {
        return userTasks[_user];
    }

    function getTask(uint256 _id) public view returns (Task memory) {
        return tasks[_id];
    }

    function getTaskCount() public view returns (uint256) {
        return taskCount;
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // Função auxiliar para verificar se tarefa está atrasada
    function isTaskOverdue(uint256 _id) public view returns (bool) {
        Task memory task = tasks[_id];
        return !task.status && block.timestamp > task.deadline;
    }
}