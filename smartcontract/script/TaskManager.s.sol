// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {TaskManager} from "../src/TaskManager.sol";

contract TaskManagerScript is Script {
    TaskManager public taskManager;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        taskManager = new TaskManager();
        console.log("TaskManager deployed to:", address(taskManager));

        vm.stopBroadcast();
    }
}
