// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {TaskManager} from "../src/TaskManager.sol";

contract TaskManagerTest is Test {
    TaskManager public taskManager;
    address public user1 = makeAddr("user1");

    event TaskCreated(uint256 id, string title, address creator, uint256 stakeAmount, uint256 deadline);
    event TaskCompleted(uint256 id, uint256 stakeReturned);
    event StakeLost(uint256 id, uint256 stakeAmount);

    function setUp() public {
        taskManager = new TaskManager();
        vm.deal(user1, 1 ether);
    }

    // Teste 1: Criar tarefa
    function test_CreateTask() public {
        uint256 stakeAmount = 0.001 ether;
        uint256 deadline = block.timestamp + 1000;
        
        vm.prank(user1);
        taskManager.createTask{value: stakeAmount}("Estudar Solidity", "Completar tutorial", deadline);
        
        assertEq(taskManager.getTaskCount(), 1);
        
        TaskManager.Task memory task = taskManager.getTask(1);
        assertEq(task.stakeAmount, stakeAmount);
        assertEq(task.deadline, deadline);
        assertEq(task.status, false);
        assertEq(task.creator, user1);
    }

    // Teste 2: Completar tarefa
    function test_CompleteTask() public {
        uint256 stakeAmount = 0.001 ether;
        uint256 deadline = block.timestamp + 1000;
        uint256 initialBalance = user1.balance;
        
        // Criar tarefa
        vm.prank(user1);
        taskManager.createTask{value: stakeAmount}("Estudar Solidity", "Completar tutorial", deadline);
        
        // Completar tarefa
        vm.prank(user1);
        taskManager.completeTask(1);
        
        // Verificar se recebeu o stake de volta
        uint256 finalBalance = user1.balance;
        assertEq(finalBalance, initialBalance);
        
        TaskManager.Task memory task = taskManager.getTask(1);
        assertEq(task.status, true);
        assertEq(task.stakeReturned, true);
    }

    // Teste 3: Listar tarefas do usuário
    function test_ListUserTasks() public {
        uint256 stakeAmount = 0.001 ether;
        uint256 deadline = block.timestamp + 1000;
        
        // User1 cria 3 tarefas
        vm.startPrank(user1);
        taskManager.createTask{value: stakeAmount}("Tarefa 1", "Primeira tarefa", deadline);
        taskManager.createTask{value: stakeAmount}("Tarefa 2", "Segunda tarefa", deadline);
        taskManager.createTask{value: stakeAmount}("Tarefa 3", "Terceira tarefa", deadline);
        vm.stopPrank();
        
        // Verificar tarefas do usuário
        uint256[] memory userTasks = taskManager.getUserTasks(user1);
        
        assertEq(userTasks.length, 3);
        assertEq(userTasks[0], 1);
        assertEq(userTasks[1], 2);
        assertEq(userTasks[2], 3);
        
        // Verificar que total de tarefas é 3
        assertEq(taskManager.getTaskCount(), 3);
        
        // Verificar detalhes de cada tarefa
        for (uint i = 0; i < userTasks.length; i++) {
            TaskManager.Task memory task = taskManager.getTask(userTasks[i]);
            assertEq(task.creator, user1);
            assertEq(task.stakeAmount, stakeAmount);
            assertEq(task.status, false); // Todas ainda pendentes
        }
    }
}
