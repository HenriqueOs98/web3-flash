# 📝 TaskManager Smart Contract 

## 🎯 O que é este projeto?

Este é um **Smart Contract** (contrato inteligente) simplificado que funciona como um sistema de compromisso pessoal com incentivo financeiro e **prazo limite**. Você deposita dinheiro ao criar uma tarefa com um deadline - se completar no prazo, recebe de volta; se atrasar, perde o dinheiro!

**💡 Ideia Principal**: "Aposte em você mesmo E cumpra o prazo para não perder dinheiro!"

---

## 🧠 Como Funciona (Super Simples)

1. **💰 Criar Tarefa**: Você paga pelo menos 0.001 ETH e define um prazo
2. **✅ Completar NO PRAZO**: Recebe seu dinheiro de volta
3. **❌ Completar ATRASADO**: Perde o dinheiro (fica no contrato)
4. **📋 Listar**: Pode ver todas as suas tarefas criadas

**É como uma "caixinha de compromisso com cronômetro"** - você tem que cumprir no tempo certo!

---

## 🌐 A Blockchain Ethereum: A Revolução dos Contratos Inteligentes

Antes de mergulharmos no código, é fundamental entender a tecnologia que torna tudo isso possível:

### **🔗 O que é a Blockchain Ethereum?**

**Ethereum é um "computador mundial descentralizado"** que permite executar programas (smart contracts) de forma transparente e imutável.

**🏛️ Analogia Simples:**
- **Bitcoin** = Sistema bancário digital (só transfere dinheiro)
- **Ethereum** = Sistema operacional digital (executa qualquer programa)

**🌍 Como Funciona:**
- **Milhares de computadores** ao redor do mundo executam a mesma rede
- **Todos têm uma cópia idêntica** de todos os dados e programas
- **Consensus**: Maioria precisa concordar com mudanças
- **Imutável**: Uma vez confirmado, não pode ser alterado

---

### **🚀 O que a Ethereum Revolucionou?**

#### **1. 💰 Finanças Descentralizadas (DeFi)**
- **Empréstimos sem banco**: Pedir emprestado diretamente de outros usuários
- **Exchanges descentralizadas**: Trocar moedas sem intermediários
- **Yield farming**: Ganhar juros fornecendo liquidez
- **Seguros automáticos**: Contratos que pagam automaticamente

#### **2. 🎨 Propriedade Digital (NFTs)**
- **Arte digital única**: Provas de autenticidade inalteráveis
- **Colecionáveis**: Cards, personagens de games, metaverso
- **Documentos**: Diplomas, certificados, contratos
- **Gaming**: Itens que você realmente possui

#### **3. 🏢 Organizações Autônomas (DAOs)**
- **Empresas sem CEO**: Governança por votação dos membros
- **Tesouraria transparente**: Todos veem como o dinheiro é usado
- **Decisões automáticas**: Contratos executam o que foi votado
- **Participação global**: Qualquer um pode participar

#### **4. 🔮 Casos de Uso Inovadores**
- **Identidade digital**: Controle total sobre seus dados
- **Supply chain**: Rastrear produtos da origem ao consumidor
- **Votação eletrônica**: Eleições transparentes e auditáveis
- **Micro-seguros**: Proteção para pequenos riscos

---

### **⛽ Como Funciona o Gas na Ethereum?**

**Gas é a "gasolina" que alimenta a máquina virtual Ethereum.**

#### **🔋 O que é Gas?**
- **Unidade de computação**: Cada operação consome uma quantidade específica
- **Prevenção de spam**: Impede loops infinitos e ataques
- **Incentivo para mineradores**: Quem processa recebe as taxas
- **Priorização**: Quem paga mais, tem transação processada primeiro

#### **💡 Analogia Prática:**
```
Gas = Combustível do carro
- Operações simples = pouco combustível (ler dados)
- Operações complexas = muito combustível (criar contrato)
- Preço varia = hora do rush vs. madrugada
- Você escolhe = quanto quer pagar pela velocidade
```

#### **📊 Estrutura do Gas:**

**Gas Limit (Limite de Gas):**
- **Máximo que você está disposto a gastar**
- Se não for suficiente → transação falha
- Se sobrar → é devolvido automaticamente

**Gas Price (Preço do Gas):**
- **Quanto você paga por unidade de gas**
- Medido em **Gwei** (1 Gwei = 0.000000001 ETH)
- **Mais alto** = processamento mais rápido
- **Mais baixo** = pode demorar ou não ser processado

**Cálculo Final:**
```
Taxa Total = Gas Usado × Gas Price
Exemplo: 21,000 gas × 20 Gwei = 0.00042 ETH (~$1.50)
```

#### **🎯 Fatores que Afetam o Gas:**

**📈 Complexidade da Operação:**
- **Transferir ETH**: ~21,000 gas
- **Transferir tokens**: ~50,000 gas  
- **Criar contrato**: ~200,000+ gas
- **Interações complexas**: 500,000+ gas

**🚦 Congestionamento da Rede:**
- **Muitas transações** = preços sobem
- **Poucas transações** = preços baixam
- **Horários de pico** = mais caro
- **Finais de semana** = mais barato

#### **💡 Dicas para Economizar Gas:**
1. **Escolha horários calmos** (madrugada, fins de semana)
2. **Use redes Layer 2** (Polygon, Arbitrum) para testes
3. **Otimize contratos** - código mais eficiente
4. **Agrupe operações** - faça várias coisas de uma vez
5. **Use carteiras que estimam** gas automaticamente

#### **🔧 Gas em Desenvolvimento:**
- **Testes locais**: Gas grátis (blockchain local)
- **Testnets**: Gas grátis (ETH falso de faucets)
- **Mainnet**: Gas real (ETH verdadeiro)

**Por isso começamos sempre com testnets! 🧪**

---

### **🎯 Por que Isso Importa para Nosso TaskManager?**

**🔗 Nosso contrato aproveita todos esses conceitos:**
- **Transparência**: Qualquer um pode verificar as tarefas
- **Imutabilidade**: Tasks criadas não podem ser falsificadas
- **Descentralização**: Funciona sem servidor central
- **Automatização**: Stake é devolvido automaticamente
- **Confiabilidade**: Código executa exatamente como programado

**💰 Custos reais:**
- **Criar tarefa**: ~80,000 gas ($1-5 dependendo do preço)
- **Completar tarefa**: ~45,000 gas ($0.50-3)
- **Ver dados**: Grátis (operações de leitura)

---

## 💻 Solidity: A Linguagem dos Smart Contracts

Agora que entendemos a Ethereum, vamos conhecer a linguagem que usamos para programar nela:

### **🔤 O que é Solidity?**

**Solidity é a linguagem de programação principal para criar smart contracts na Ethereum.**

**🎯 Características Principais:**
- **Criada especificamente** para blockchain
- **Inspirada em JavaScript, Python e C++**
- **Estaticamente tipada** - tipos definidos em tempo de compilação
- **Orientada a contratos** - não classes, mas contratos
- **Compilada** - vira bytecode que roda na EVM (Ethereum Virtual Machine)

**📝 Analogia:**
```
Se Ethereum = Sistema Operacional
Então Solidity = Linguagem de Programação (como C++ para Windows)
```

---

### **🏗️ Paradigma de Programação: Orientação a Contratos**

**Solidity usa um paradigma único: Orientação a Contratos.**

#### **🔄 Diferenças dos Paradigmas Tradicionais:**

**📊 Programação Orientada a Objetos (POO):**
```javascript
// JavaScript/Java - Classes e Objetos
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    falar() { console.log("Olá!"); }
}
```

**📜 Programação Orientada a Contratos:**
```solidity
// Solidity - Contratos
contract TaskManager {
    address public owner;
    
    constructor() {
        owner = msg.sender;
    }
    
    function criarTarefa() public { }
}
```

#### **🎯 Características da Orientação a Contratos:**

**1. 📋 Contratos como Entidades Principais**
- **Contract** = unidade básica (como class em POO)
- **Herança** entre contratos é possível
- **Interfaces** para definir padrões
- **Libraries** para código reutilizável

**2. 💾 Estado Persistente**
- **Variáveis de estado** ficam permanentemente na blockchain
- **Storage vs Memory** - onde os dados vivem
- **Imutabilidade** após deploy (sem updates diretos)

**3. 💰 Consciência Financeira**
- **`payable`** - funções que recebem ETH
- **`msg.value`** - quanto ETH foi enviado
- **`transfer()` / `call()`** - enviar ETH
- **Gas** - cada operação tem custo

**4. 🔐 Segurança por Design**
- **`require()`** - validações obrigatórias
- **Modificadores** - controle de acesso
- **Reentrancy** - proteção contra ataques
- **Overflow** - proteção automática (0.8.x+)

**5. 📡 Comunicação Externa**
- **Events** - logs para frontend
- **msg.sender** - quem chamou a função
- **tx.origin** - quem iniciou a transação
- **block.timestamp** - tempo da blockchain

#### **💡 Por que esse Paradigma?**

**🌐 Ambiente Blockchain Exige:**
- **Transparência total** - código público
- **Imutabilidade** - não pode ser alterado
- **Descentralização** - roda em milhares de computadores
- **Determinismo** - mesmo input = mesmo output
- **Custoso** - cada operação custa gas

**🔧 Solidity Responde:**
- **Contratos autocontidos** - tudo em um lugar
- **Tipagem forte** - evita erros custosos
- **Modificadores** - segurança declarativa
- **Events** - comunicação eficiente
- **Gas optimization** - ferramentas para economizar

---

### **🎨 Sintaxe e Conceitos Únicos**

#### **📝 Estrutura Básica:**
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MeuContrato {
    // 1. Variáveis de estado (storage)
    uint256 public contador;
    mapping(address => uint256) public saldos;
    
    // 2. Eventos
    event ContadorIncrementado(uint256 novoValor);
    
    // 3. Modificadores
    modifier apenas(address quem) {
        require(msg.sender == quem, "Acesso negado");
        _;
    }
    
    // 4. Constructor
    constructor() {
        contador = 0;
    }
    
    // 5. Funções
    function incrementar() public {
        contador++;
        emit ContadorIncrementado(contador);
    }
}
```

#### **🔑 Conceitos Únicos da Linguagem:**

**📍 Tipos de Localização:**
- **`storage`** - dados permanentes (disco rígido)
- **`memory`** - dados temporários (RAM)
- **`calldata`** - dados de entrada imutáveis

**💸 Modificadores de Pagamento:**
- **`payable`** - pode receber ETH
- **`view`** - só lê dados (grátis)
- **`pure`** - não acessa dados (grátis)

**🔒 Níveis de Visibilidade:**
- **`public`** - qualquer um pode chamar
- **`external`** - só chamadas externas
- **`internal`** - só dentro do contrato/herança
- **`private`** - só dentro do contrato atual

---

## 🔨 Foundry: O Ambiente de Desenvolvimento Moderno

**Foundry é a ferramenta mais avançada para desenvolvimento em Solidity.**

### **⚡ O que é Foundry?**

**Foundry é um toolkit completo para smart contracts, escrito em Rust para máxima performance.**

**🎯 Componentes Principais:**
- **Forge** - Compilação, testes e deploy
- **Cast** - Interação com blockchain via linha de comando
- **Anvil** - Blockchain local para testes
- **Chisel** - REPL para experimentar Solidity

---

### **🚀 Por que Foundry Revolucionou o Desenvolvimento?**

#### **⚡ Velocidade Extrema**
```bash
# Foundry (Rust)
forge test
# ✅ Ran 1000 tests in 2.3s

# Hardhat (JavaScript)  
npx hardhat test
# ⏳ Ran 1000 tests in 45s
```

#### **🧪 Testes em Solidity**
**Tradicional (JavaScript):**
```javascript
// Hardhat/Truffle
it("should create task", async () => {
    const contract = await TaskManager.deploy();
    await contract.createTask("Test", "Description", deadline);
    expect(await contract.taskCount()).to.equal(1);
});
```

**Foundry (Solidity):**
```solidity
// Foundry - testa em Solidity nativo!
function testCreateTask() public {
    taskManager.createTask{value: 0.001 ether}("Test", "Description", deadline);
    assertEq(taskManager.taskCount(), 1);
}
```

#### **🔧 Ferramentas Integradas**

**📦 Gerenciamento de Dependências:**
```bash
# Instalar bibliotecas
forge install openzeppelin/openzeppelin-contracts

# Atualizar dependências
forge update
```

**🔍 Análise e Debug:**
```bash
# Gas report detalhado
forge test --gas-report

# Trace de execução
forge test --trace

# Cobertura de código
forge coverage
```

**🌐 Deploy e Interação:**
```bash
# Deploy com verificação
forge script Deploy.s.sol --broadcast --verify

# Interação via CLI
cast call $CONTRACT "getTaskCount()" --rpc-url $RPC
cast send $CONTRACT "createTask(string,string,uint256)" "Title" "Desc" $DEADLINE
```

---

### **🎯 Vantagens do Foundry sobre Hardhat/Truffle**

| Aspecto | Foundry | Hardhat/Truffle |
|---------|---------|-----------------|
| **Velocidade** | ⚡ 20-100x mais rápido | 🐌 Mais lento |
| **Linguagem dos Testes** | 💎 Solidity nativo | 🔄 JavaScript/TypeScript |
| **Setup** | 🎯 Zero configuração | ⚙️ Configuração complexa |
| **Gas Reports** | 📊 Detalhados e rápidos | 📈 Básicos |
| **Dependencies** | 📦 Git-based simples | 📦 NPM complexo |
| **CLI Tools** | 🔧 Cast integrado | 🔧 Ferramentas separadas |
| **Debugging** | 🔍 Trace nativo | 🔍 Tools externos |

---

### **🛠️ Comandos Essenciais do Foundry**

#### **📋 Comandos Básicos:**
```bash
# Criar novo projeto
forge init meu-projeto

# Compilar contratos
forge build

# Rodar testes
forge test

# Instalar dependência
forge install openzeppelin/openzeppelin-contracts
```

#### **🧪 Comandos de Teste:**
```bash
# Testes específicos
forge test --match-test testCreateTask

# Com gas report
forge test --gas-report

# Com trace detalhado
forge test -vvv

# Cobertura de código
forge coverage
```

#### **🌐 Comandos de Deploy:**
```bash
# Deploy local
forge script script/Deploy.s.sol

# Deploy testnet
forge script script/Deploy.s.sol --rpc-url $SEPOLIA_RPC --broadcast

# Deploy com verificação
forge script script/Deploy.s.sol --rpc-url $SEPOLIA_RPC --broadcast --verify
```

#### **🔧 Comandos Cast:**
```bash
# Ler dados
cast call $CONTRACT "taskCount()" --rpc-url $RPC

# Enviar transação
cast send $CONTRACT "createTask(string,string,uint256)" "Title" "Desc" $DEADLINE --private-key $KEY

# Obter saldo
cast balance $ADDRESS --rpc-url $RPC

# Converter unidades
cast --to-wei 1 ether
cast --from-wei 1000000000000000000
```

---

### **🎯 Por que Escolhemos Foundry para Este Projeto?**

**✅ Perfecto para Aprendizado:**
1. **Foco em Solidity** - aprende uma linguagem, não duas
2. **Feedback rápido** - ciclo de desenvolvimento veloz
3. **Ferramentas profissionais** - usado pela indústria
4. **Documentação excelente** - comunidade ativa

**🚀 Perfeito para Produção:**
1. **Performance** - builds e testes ultrarrápidos
2. **Segurança** - ferramentas de análise integradas
3. **Simplicidade** - menos config, mais código
4. **Futuro** - tendência da indústria

**💡 Nossa Stack Completa:**
- **Linguagem**: Solidity 0.8.13
- **Framework**: Foundry
- **Testes**: Forge (Solidity nativo)
- **Deploy**: Forge scripts
- **Interação**: Cast CLI
- **Blockchain local**: Anvil

---

## 📝 Smart Contract

Agora que entendemos a tecnologia (Ethereum), a linguagem (Solidity) e as ferramentas (Foundry), vamos analisar nosso contrato `TaskManager.sol` linha por linha:

---

### **1. Declaração da Licença e Versão**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
```

**📋 O que significa:**
- **`SPDX-License-Identifier`**: Especifica que o código é MIT (open source)
- **`pragma solidity ^0.8.13`**: Define que o código funciona com Solidity versão 0.8.13 ou superior
- **Por que importante**: Garante compatibilidade e define as regras de uso

---

### **2. Declaração dos Events (Eventos)**

```solidity
event TaskCreated(uint256 id, string title, address creator, uint256 stakeAmount, uint256 deadline);
event TaskCompleted(uint256 id, uint256 stakeReturned);
event StakeLost(uint256 id, uint256 stakeAmount);
```

**📢 O que são Events:**
- **Notificações permanentes** que ficam gravadas na blockchain
- **Frontend pode "escutar"** e reagir quando acontecem
- **Mais baratos** que salvar dados no storage
- **Indexáveis** para busca rápida

**🎯 Cada Event:**
- **`TaskCreated`**: Quando uma tarefa é criada (ID, título, criador, valor, prazo)
- **`TaskCompleted`**: Quando uma tarefa é concluída (ID, valor devolvido)
- **`StakeLost`**: Quando o stake é perdido por atraso (ID, valor perdido)

**💡 Analogia**: Como notificações push do WhatsApp - avisam o que aconteceu

---

### **3. Início do Contrato**

```solidity
contract TaskManager {
```

**📋 Declaração do contrato principal**
- **`contract`**: Palavra-chave para criar um smart contract
- **`TaskManager`**: Nome do nosso contrato
- Tudo dentro das chaves `{}` faz parte do contrato

---

### **4. Estrutura de Dados - Struct Task**

```solidity
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
```

**🏗️ O que é uma Struct:**
- **Estrutura de dados personalizada** que agrupa informações relacionadas
- **Como uma ficha** com todos os dados de uma tarefa
- **Reutilizável** - podemos criar várias tarefas com essa estrutura

**📝 Cada campo explicado:**
- **`uint256 id`**: Número único da tarefa (1, 2, 3...)
- **`string title`**: Título da tarefa ("Estudar Solidity")
- **`string description`**: Descrição detalhada ("Completar 5 aulas")
- **`uint256 createdAt`**: Timestamp de quando foi criada
- **`uint256 deadline`**: **CAMPO PRINCIPAL** - prazo limite!
- **`bool status`**: `false` = pendente, `true` = concluída
- **`address creator`**: Endereço de quem criou a tarefa
- **`uint256 stakeAmount`**: Valor apostado em wei
- **`bool stakeReturned`**: Se já processou o retorno do stake

**💡 Analogia**: Como uma ficha médica - tem todos os dados importantes em um lugar

---

### **5. Variáveis de Estado (Storage)**

```solidity
mapping(uint256 => Task) public tasks;
mapping(address => uint256[]) public userTasks; // tarefas de cada usuário
uint256 public taskCount = 0;

uint256 public constant MINIMUM_STAKE = 0.001 ether;
```

**🗃️ Sistema de Armazenamento:**

#### **5.1 Mapping Principal das Tarefas**
```solidity
mapping(uint256 => Task) public tasks;
```
- **`mapping`**: Estrutura chave-valor (como dicionário)
- **`uint256`**: ID da tarefa (chave)
- **`Task`**: Dados completos da tarefa (valor)
- **`public`**: Cria função getter automática
- **Exemplo**: `tasks[1]` retorna a Tarefa 1 completa

#### **5.2 Mapping das Tarefas por Usuário**
```solidity
mapping(address => uint256[]) public userTasks;
```
- **Cada endereço** tem uma lista de IDs das suas tarefas
- **Array dinâmico** que cresce conforme cria tarefas
- **Exemplo**: `userTasks[0x123...] = [1, 5, 8]` (criou tarefas 1, 5 e 8)

#### **5.3 Contador Global**
```solidity
uint256 public taskCount = 0;
```
- **Gera IDs únicos** sequenciais: 1, 2, 3, 4...
- **Sempre incrementa** - nunca diminui
- **Total de tarefas** criadas no sistema

#### **5.4 Constante de Valor Mínimo**
```solidity
uint256 public constant MINIMUM_STAKE = 0.001 ether;
```
- **`constant`**: Nunca muda, economiza gas
- **0.001 ether**: Valor mínimo obrigatório (~$3-4 USD)
- **Por que**: Garante incentivo financeiro real

---

### **6. Função Criar Tarefa**

```solidity
function createTask(string memory _title, string memory _description, uint256 _deadline) public payable {
```

#### **6.1 Assinatura da Função**
- **`string memory _title`**: Título temporário na memória
- **`string memory _description`**: Descrição temporária
- **`uint256 _deadline`**: Timestamp do prazo limite
- **`public`**: Qualquer um pode chamar
- **`payable`**: Pode receber ETH junto com a chamada

#### **6.2 Validações de Entrada**
```solidity
require(msg.value >= MINIMUM_STAKE, "Valor minimo e 0.001 ether");
require(_deadline > block.timestamp, "Prazo deve ser maior que agora");
```

**🛡️ Verificações de Segurança:**
- **`msg.value`**: Quanto ETH foi enviado junto com a transação
- **`>=`**: Deve ser pelo menos 0.001 ether
- **`block.timestamp`**: Tempo atual da blockchain
- **`require()`**: Se falso, reverte toda a transação

#### **6.3 Criação da Tarefa**
```solidity
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
```

**⚙️ Sequência de Criação:**
1. **`taskCount++`**: Incrementa contador (1, 2, 3...)
2. **`tasks[taskCount] = Task({...})`**: Cria nova tarefa no mapping
3. **Campos preenchidos:**
   - **`id`**: ID único atual
   - **`title/description`**: Dados fornecidos pelo usuário
   - **`createdAt`**: Timestamp atual
   - **`deadline`**: Prazo fornecido
   - **`status: false`**: Tarefa começa pendente
   - **`creator: msg.sender`**: Quem está criando
   - **`stakeAmount: msg.value`**: ETH enviado
   - **`stakeReturned: false`**: Ainda não processado

#### **6.4 Adição à Lista Pessoal**
```solidity
userTasks[msg.sender].push(taskCount);
```
- **`userTasks[msg.sender]`**: Array de tarefas do criador
- **`.push(taskCount)`**: Adiciona novo ID ao final da lista
- **Resultado**: Usuário pode listar suas tarefas depois

#### **6.5 Emissão de Evento**
```solidity
emit TaskCreated(taskCount, _title, msg.sender, msg.value, _deadline);
```
- **`emit`**: Emite um evento
- **Frontend pode capturar** e mostrar "Tarefa criada!" 
- **Dados inclusos**: ID, título, criador, valor, prazo

---

### **7. Função Completar Tarefa**

```solidity
function completeTask(uint256 _id) public {
```

#### **7.1 Buscar Tarefa (Storage)**
```solidity
Task storage task = tasks[_id];
```
- **`storage`**: Referência direta ao dado original
- **Por que storage?** Vamos MODIFICAR a tarefa
- **`task`**: Variável que aponta para a tarefa real

#### **7.2 Validações de Segurança**
```solidity
require(task.creator == msg.sender, "Apenas o criador pode completar");
require(!task.status, "Tarefa ja concluida");
require(!task.stakeReturned, "Stake ja foi processado");
```

**🔒 Três Camadas de Proteção:**
1. **Controle de acesso**: Só dono completa sua tarefa
2. **Estado da tarefa**: Não pode completar duas vezes
3. **Controle de stake**: Não pode receber dinheiro duas vezes

#### **7.3 Marcação como Concluída**
```solidity
task.status = true;
task.stakeReturned = true;
```
- **Marca como concluída PRIMEIRO** (padrão CEI)
- **Evita reentrancy** - mudança de estado antes de enviar ETH
- **Ambas flags** são marcadas sempre

#### **7.4 Lógica do Prazo (Coração do Sistema)**
```solidity
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
```

**⏰ Decisão Automática:**
- **`block.timestamp <= task.deadline`**: Se ainda está no prazo
- **NO PRAZO**: Devolve o ETH para o criador
- **ATRASADO**: ETH fica no contrato (perdido)

**💸 Transferência Segura:**
- **`.call{value: ...}`**: Método moderno e seguro
- **`payable(task.creator)`**: Converte endereço para receber ETH
- **`require(success)`**: Garante que transferência funcionou

**📢 Eventos Diferentes:**
- **NO PRAZO**: `TaskCompleted` com valor devolvido
- **ATRASADO**: `TaskCompleted` com 0 + `StakeLost` com valor perdido

---

### **8. Funções Auxiliares (View Functions)**

#### **8.1 Listar Tarefas do Usuário**
```solidity
function getUserTasks(address _user) public view returns (uint256[] memory) {
    return userTasks[_user];
}
```
- **`view`**: Só lê dados, não modifica nada
- **`returns (uint256[] memory)`**: Retorna array de IDs
- **Uso**: Frontend chama para mostrar "Minhas Tarefas"

#### **8.2 Ver Detalhes de uma Tarefa**
```solidity
function getTask(uint256 _id) public view returns (Task memory) {
    return tasks[_id];
}
```
- **Retorna struct Task completa**
- **`memory`**: Cópia temporária (não vamos modificar)
- **Uso**: Frontend busca detalhes de tarefa específica

#### **8.3 Contador Total**
```solidity
function getTaskCount() public view returns (uint256) {
    return taskCount;
}
```
- **Quantas tarefas existem no total**
- **Útil para estatísticas**

#### **8.4 Saldo do Contrato**
```solidity
function getContractBalance() public view returns (uint256) {
    return address(this).balance;
}
```
- **Quanto ETH está travado no contrato**
- **`address(this)`**: Endereço do próprio contrato
- **Mostra dinheiro "perdido" por tarefas atrasadas**

#### **8.5 Verificar se Tarefa Está Atrasada**
```solidity
function isTaskOverdue(uint256 _id) public view returns (bool) {
    Task memory task = tasks[_id];
    return !task.status && block.timestamp > task.deadline;
}
```

**🕐 Lógica de Atraso:**
- **`!task.status`**: Se NÃO foi concluída ainda
- **`block.timestamp > task.deadline`**: Se passou do prazo
- **`&&`**: Ambas condições precisam ser verdadeiras
- **Retorno**: `true` = atrasada, `false` = ok

---

### **💡 Resumo da Arquitetura**

**🏗️ Estrutura:**
1. **Events** → Sistema de notificações
2. **Struct** → Modelo de dados da tarefa
3. **Mappings** → Armazenamento permanente
4. **Constantes** → Valores fixos

**⚙️ Funcionalidades:**
1. **createTask()** → Criar tarefa com stake
2. **completeTask()** → Completar e decidir sobre stake
3. **Views** → Consultar dados sem modificar

**🔒 Segurança:**
- Validações de entrada
- Controle de acesso
- Prevenção de dupla execução
- Transferência segura de ETH

**Esta é a anatomia completa do nosso TaskManager!** 🎯

---

---

## 🧪 Explicação Detalhada dos Testes

Foram criados apenas **3 testes essenciais** para cobrir as funcionalidades principais do contrato:

### **📋 Estrutura dos Testes**

```solidity
contract TaskManagerTest is Test {
    TaskManager public taskManager;
    address public user1 = makeAddr("user1");
```

**Setup Inicial**:
- **`taskManager`**: Instância do contrato que será testada
- **`user1`**: Endereço fictício para simular o usuário
- **`makeAddr()`**: Função do Foundry que cria endereços válidos para testes

### **🔧 Função setUp()**

```solidity
function setUp() public {
    taskManager = new TaskManager();
    vm.deal(user1, 1 ether);
}
```

**O que faz**:
- **Deploy do contrato**: Cria nova instância para cada teste
- **Dar ETH ao usuário**: `vm.deal()` adiciona 1 ETH na carteira
- **Ambiente limpo**: Cada teste começa do zero

---

### **Teste 1: Criar Tarefa**

```solidity
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
```

**🎯 Objetivo**: Verificar se a criação básica de tarefa funciona

**📝 O que testa**:
- **Contagem correta**: `taskCount` aumenta para 1
- **Dados salvos**: Stake, deadline, status, creator estão corretos
- **Estado inicial**: Tarefa criada mas não concluída

**🔍 Por que importante**: Função fundamental - se não criar tarefa, nada funciona

---

### **Teste 2: Completar Tarefa**

```solidity
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
```

**🎯 Objetivo**: Garantir que completar tarefa no prazo devolve o dinheiro

**📝 O que testa**:
- **Criação e conclusão**: Fluxo completo de uma tarefa
- **Saldo restaurado**: User1 recebe seu ETH de volta
- **Status atualizado**: Tarefa marcada como concluída
- **Stake processado**: Flag `stakeReturned` marcada como `true`

**🔍 Por que importante**: Principal incentivo do sistema - completar = recuperar dinheiro

---

### **Teste 3: Listar Tarefas do Usuário**

```solidity
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
```

**🎯 Objetivo**: Verificar se o sistema de listagem de tarefas funciona

**📝 O que testa**:
- **Múltiplas tarefas**: Criação de várias tarefas por usuário
- **Array correto**: `getUserTasks()` retorna IDs na ordem certa
- **Contador global**: `getTaskCount()` reflete total correto
- **Detalhes individuais**: Cada tarefa tem dados corretos
- **Estado inicial**: Tarefas criadas começam pendentes

**🔍 Por que importante**: Usuário precisa ver suas tarefas para gerenciá-las

---

### **🎯 Cobertura de Testes Simplificada**

#### **✅ Funcionalidades Essenciais Testadas**
- ✅ **Criar tarefa** com stake e deadline
- ✅ **Completar tarefa** → recebe stake de volta
- ✅ **Listar tarefas** → visualiza suas tarefas criadas

#### **💡 Por que apenas 3 testes?**
- **Simplicidade**: Foco nas funcionalidades mais importantes
- **Clareza**: Mais fácil de entender e manter
- **Cobertura**: Testa os 3 cenários principais do sistema

### **🚀 Como Executar os Testes**

```bash
# Executar todos os testes
forge test

# Executar com detalhes verbosos
forge test -vv

# Executar teste específico
forge test --match-test test_CreateTask

# Executar com relatório de gas
forge test --gas-report
```

**💡 Dica**: Esses 3 testes cobrem o essencial - criar, completar e listar tarefas!

---

### **🧪 Ideias de Testes Adicionais (Para Expandir)**

Se você quiser aprimorar os testes, aqui estão algumas **ideias** de cenários que poderiam ser testados:

#### **🔒 Testes de Segurança**
- **Apenas criador pode completar**: Verificar se outros usuários não conseguem completar tarefas alheias
- **Não completar duas vezes**: Garantir que não é possível marcar a mesma tarefa como concluída várias vezes
- **Valor mínimo obrigatório**: Testar se tarefas com stake muito baixo são rejeitadas
- **Deadline no futuro**: Verificar se não é possível criar tarefas com prazo no passado

#### **⏰ Testes de Tempo e Prazo**
- **Completar no prazo**: Verificar se completar antes do deadline retorna o stake
- **Completar atrasado**: Testar se completar após o deadline resulta em perda do stake
- **Verificar se está atrasado**: Função `isTaskOverdue()` retorna valores corretos
- **Deadline exato**: Testar comportamento quando completa exatamente no limite

#### **📊 Testes de Dados e Estados**
- **Contador de tarefas**: Verificar se `taskCount` incrementa corretamente
- **Dados da tarefa**: Confirmar se título, descrição e outros campos são salvos corretamente
- **Status inicial**: Tarefas começam com `status = false` e `stakeReturned = false`
- **Múltiplos usuários**: Cada usuário tem sua lista independente de tarefas

#### **💰 Testes Financeiros**
- **Saldo do contrato**: Verificar se ETH fica no contrato quando stake é perdido
- **Transferência segura**: Confirmar se devolução de stake funciona corretamente
- **Gas eficiente**: Testar se funções view não consomem gas desnecessário
- **Stakes diferentes**: Testar com valores variados de stake

#### **📢 Testes de Eventos**
- **Evento de criação**: `TaskCreated` é emitido com dados corretos
- **Evento de conclusão**: `TaskCompleted` com valor correto (stake ou zero)
- **Evento de perda**: `StakeLost` quando tarefa é completada atrasada
- **Parâmetros dos eventos**: Verificar se todos os dados estão corretos

#### **🔧 Testes de Funcionalidades Auxiliares**
- **Listar tarefas vazias**: Usuário sem tarefas retorna array vazio
- **Buscar tarefa inexistente**: Comportamento ao buscar ID que não existe
- **Constante mínima**: Verificar se `MINIMUM_STAKE` tem valor correto
- **Múltiplas tarefas**: Usuário com várias tarefas na ordem correta

#### **🚨 Testes de Casos Extremos**
- **Stake muito alto**: Testar com valores grandes de ETH
- **Deadline muito futuro**: Prazos distantes (anos no futuro)
- **String vazia**: Título ou descrição vazios
- **Overflow de contador**: Muitas tarefas criadas (teste de stress)

#### **💡 Dicas para Implementar Testes**
- **Use `vm.expectRevert()`** para testar falhas esperadas
- **Use `vm.warp()`** para simular passagem do tempo
- **Use `vm.prank()`** para simular diferentes usuários
- **Use `assertEq()`** para verificar valores exatos
- **Use `vm.expectEmit()`** para verificar eventos

**🎯 Objetivo dos Testes Extras:**
- **Maior confiança** no código
- **Detectar bugs** antes do deploy
- **Documentar comportamento** esperado
- **Facilitar manutenção** futura

**Lembre-se**: Testes são investimento - custam tempo para escrever, mas economizam muito tempo debuggando depois!

---

## 🔒 Segurança e Validações

### **1. Proteção do Proprietário**
```solidity
require(task.creator == msg.sender, "Apenas o criador pode completar");
```
- **Por que**: Só você pode marcar suas próprias tarefas como concluídas
- **Analogia**: Como um diário pessoal com cadeado

### **2. Prevenção de Dupla Conclusão**
```solidity
require(!task.status, "Tarefa ja concluida");
require(!task.stakeReturned, "Stake ja foi processado");
```
- **Por que**: Impede marcar a mesma tarefa duas vezes ou receber o dinheiro duas vezes
- **Analogia**: Como um cupom que só pode ser usado uma vez

### **3. Valor Mínimo**
```solidity
require(msg.value >= MINIMUM_STAKE, "Valor minimo e 0.001 ether");
```
- **Por que**: Garante que há um incentivo financeiro real (não apostas de centavos)
- **Analogia**: Como taxa mínima de um serviço

---

## 💡 Por Que Isso Funciona?

### **Psicologia do Compromisso**
1. **Aversão à Perda**: Pessoas odeiam perder dinheiro mais do que gostam de ganhar
2. **Compromisso Público**: Registro permanente na blockchain
3. **Incentivo Tangível**: Dinheiro real em jogo, não apenas pontos virtuais

### **Tecnologia Descentralizada**
1. **Sem Intermediários**: Ninguém pode roubar seu dinheiro ou alterar as regras
2. **Transparente**: Todas as transações são públicas e verificáveis
3. **Imutável**: Uma vez criada, a tarefa não pode ser deletada ou alterada

---

## 🚀 Como Testar o Contrato

### **1. Executar Testes Automatizados**
```bash
# No diretório smartcontract
forge test
```

### **2. Script de Deploy**

Antes de fazer o deploy, vamos entender o script que automatiza esse processo:

#### **📜 Analisando o Script TaskManager.s.sol**

```solidity
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
```

#### **🔍 Explicação Linha por Linha:**

**📋 Imports e Declarações:**
```solidity
import {Script, console} from "forge-std/Script.sol";
import {TaskManager} from "../src/TaskManager.sol";
```
- **`Script`**: Classe base do Foundry para scripts de deploy
- **`console`**: Ferramenta para imprimir logs durante execução
- **`TaskManager`**: Nosso contrato que será deployado

**🏗️ Estrutura do Script:**
```solidity
contract TaskManagerScript is Script {
    TaskManager public taskManager;
```
- **Herda de `Script`**: Ganha superpoderes de deploy do Foundry
- **Variável pública**: Para armazenar referência do contrato deployado

**⚙️ Função de Setup (Opcional):**
```solidity
function setUp() public {}
```
- **Executada antes** da função `run()`
- **Configurações iniciais**: Aqui poderia configurar variáveis, validações
- **Vazia no nosso caso**: Deploy simples não precisa de setup

**🚀 Função Principal de Deploy:**
```solidity
function run() public {
    vm.startBroadcast();
    
    taskManager = new TaskManager();
    console.log("TaskManager deployed to:", address(taskManager));
    
    vm.stopBroadcast();
}
```

**🎯 Sequência de Execução:**

1. **`vm.startBroadcast()`**: 
   - **Liga o "modo transmissão"**
   - **A partir daqui**: todas as transações são enviadas para blockchain real
   - **Antes disso**: apenas simulação local

2. **`new TaskManager()`**:
   - **Cria instância** do nosso contrato
   - **Deploy real** acontece aqui
   - **Retorna endereço** do contrato na blockchain

3. **`console.log(...)`**:
   - **Imprime o endereço** do contrato deployado
   - **Importante**: você precisa desse endereço para interagir depois

4. **`vm.stopBroadcast()`**:
   - **Desliga o "modo transmissão"**
   - **A partir daqui**: volta para simulação local

#### **🎭 O que são os "vm" Commands?**

**🔧 `vm` são "cheat codes" do Foundry:**
- **`vm.startBroadcast()`**: Inicia transmissão real para blockchain
- **`vm.stopBroadcast()`**: Para transmissão real
- **`vm.prank(address)`**: Simula ser outro usuário
- **`vm.warp(timestamp)`**: Avança tempo da blockchain
- **`vm.deal(address, amount)`**: Dá ETH para endereço




---

### **3. Deploy na Sepolia com Verificação**

Agora que entendemos o script, vamos aos componentes necessários para o deploy:

#### **🌐 Por que Precisamos de um Provedor (Infura/Alchemy)?**

A blockchain Ethereum é uma **rede descentralizada** com milhares de nós (computadores) ao redor do mundo. Para interagir com ela, você precisa se conectar a um desses nós.

**💡 O Problema:**
- **Executar seu próprio nó** requer centenas de GB de espaço e sincronização constante
- **Complexo e caro** para desenvolvimento
- **Demorado** para configurar

**🚀 A Solução: Provedores RPC**
- **Infura** e **Alchemy** são serviços que mantêm nós otimizados
- **RPC** (Remote Procedure Call) = forma de se comunicar com a blockchain
- **API gratuita** com limites generosos para desenvolvimento
- **Infraestrutura profissional** sem você precisar manter

**📡 Analogia:** É como usar internet via provedor (Vivo, Claro) em vez de instalar sua própria torre de telecomunicações.

**🔗 Como Obter:**
1. **Infura**: https://infura.io/ (mais popular)
2. **Alchemy**: https://alchemy.com/ (mais recursos)
3. Crie conta gratuita → Novo projeto → Copie a URL

---

#### **🔐 Por que Precisamos de uma Chave Privada?**

**🎯 O que é uma Chave Privada:**
- **Assinatura digital** que prova que você é o dono de uma carteira
- **64 caracteres hexadecimais** (256 bits de entropia)
- **NUNCA compartilhe** - quem tem a chave, controla a carteira

**⚖️ Por que é Necessária para Deploy:**
1. **Pagar Gas**: Deploy custa ETH (taxa de rede)
2. **Assinar Transação**: Blockchain precisa saber quem está enviando
3. **Propriedade**: Você se torna o "owner" do contrato
4. **Autorização**: Prova que você tem direito de gastar seus ETH

**🔒 Segurança Crítica:**
```bash
# ✅ CORRETO - sem o prefixo 0x
PRIVATE_KEY=abc123def456...

# ❌ ERRADO - com prefixo 0x
PRIVATE_KEY=0xabc123def456...
```

**💡 Dica de Segurança:**
- **NUNCA** commite arquivo `.env` no git
- **Use carteira de teste** com pouco ETH
- **Considere usar hardware wallet** para produção

---

#### **🔍 O que é o Etherscan?**

**📊 Etherscan é o "Google" da blockchain Ethereum:**
- **Explorador de blockchain** - vê todas as transações públicas
- **Verificador de contratos** - permite ver código fonte
- **API gratuita** para desenvolvedores
- **Interface amigável** para usuários não-técnicos

**🎯 Por que Verificar Contratos:**
1. **Transparência**: Qualquer um pode ver o código
2. **Confiança**: Prova que o contrato faz o que diz
3. **Debugging**: Facilita encontrar erros
4. **Interação**: Interface web para chamar funções

**🔗 Versões por Rede:**
- **Mainnet**: https://etherscan.io/
- **Sepolia**: https://sepolia.etherscan.io/
- **Goerli**: https://goerli.etherscan.io/

**📋 Como Obter API Key:**
1. Acesse https://etherscan.io/
2. Crie conta gratuita
3. Vá em "API Keys" → "Add" → Nomeie como "Deploy"
4. Copie a chave (parece com: `ABC123DEF456...`)

---

#### **⚙️ Configurar Variáveis de Ambiente**
Crie um arquivo `.env`:
```env
# Chave privada da sua carteira (SEM 0x no início)
PRIVATE_KEY=sua_chave_privada_sem_0x

# URL do provedor RPC (Infura ou Alchemy)
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/sua_api_key

# Chave do Etherscan para verificação
ETHERSCAN_API_KEY=sua_chave_etherscan_aqui
```

**🛡️ Segurança do .env:**
```bash
# Adicione ao .gitignore para não commitar
echo ".env" >> .gitignore
```

#### **🚀 Deploy com Verificação Automática**
```bash
# Carregar variáveis e fazer deploy
source .env
forge script script/TaskManager.s.sol \
  --rpc-url $SEPOLIA_RPC_URL \
  --private-key $PRIVATE_KEY \
  --broadcast \
  --verify \
  --etherscan-api-key $ETHERSCAN_API_KEY
```

**🔧 Explicação dos Parâmetros**:
- **`--rpc-url`**: Conecta ao provedor (Infura/Alchemy)
- **`--private-key`**: Sua assinatura digital para autorizar
- **`--broadcast`**: Envia a transação para a blockchain real
- **`--verify`**: Sobe código fonte no Etherscan automaticamente
- **`--etherscan-api-key`**: Chave para upload do código fonte

**📊 O que Acontece Durante o Deploy:**
1. **Forge compila** o contrato para bytecode
2. **Conecta** ao nó via RPC (Infura/Alchemy)
3. **Assina transação** com sua chave privada
4. **Paga gas** em ETH para executar
5. **Deploy** cria endereço único do contrato
6. **Verifica** enviando código fonte para Etherscan
7. **Retorna** endereço do contrato deployado

**✅ Sucesso:** Você receberá um endereço como `0x742d35Cc123...` - esse é seu contrato!

### **4. Testar Manualmente**
```bash
# Criar tarefa com deadline (timestamp atual + 7 dias)
DEADLINE=$(($(date +%s) + 604800))
cast send ENDERECO_CONTRATO "createTask(string,string,uint256)" \
  "Teste" \
  "Minha primeira tarefa" \
  $DEADLINE \
  --value 0.001ether \
  --private-key $PRIVATE_KEY \
  --rpc-url $SEPOLIA_RPC_URL

# Completar tarefa
cast send ENDERECO_CONTRATO "completeTask(uint256)" 1 \
  --private-key $PRIVATE_KEY \
  --rpc-url $SEPOLIA_RPC_URL

# Verificar se está atrasada
cast call ENDERECO_CONTRATO "isTaskOverdue(uint256)" 1 \
  --rpc-url $SEPOLIA_RPC_URL

# Ver detalhes da tarefa criada
cast call ENDERECO_CONTRATO "getTask(uint256)" 1 \
  --rpc-url $SEPOLIA_RPC_URL

# Ver suas tarefas
cast call ENDERECO_CONTRATO "getUserTasks(address)" SEU_ENDERECO \
  --rpc-url $SEPOLIA_RPC_URL
```

---

## 🎯 Casos de Uso Reais

### **Para Estudantes**
- "Estudar 2 horas por dia" (aposta 0.01 ETH, prazo: 7 dias)
- "Entregar trabalho até sexta" (aposta 0.02 ETH, prazo: sexta 23:59h)
- "Não usar redes sociais durante estudo" (aposta 0.005 ETH, prazo: 24 horas)

### **Para Fitness**
- "Ir à academia 4x esta semana" (aposta 0.01 ETH, prazo: domingo)
- "Correr 5km hoje" (aposta 0.005 ETH, prazo: hoje 23:59h)
- "Não comer doces por uma semana" (aposta 0.015 ETH, prazo: 7 dias)

### **Para Produtividade**
- "Terminar projeto até domingo" (aposta 0.03 ETH, prazo: domingo 18:00h)
- "Não procrastinar por 3 dias" (aposta 0.01 ETH, prazo: 72 horas)
- "Organizar casa completamente" (aposta 0.02 ETH, prazo: fim de semana)

**💡 Dica**: Prazos mais apertados = maior pressão = mais efetivo!

---


## 🔮 Futuras Melhorias Possíveis

### **Versão 2.0 - Recursos Avançados**
1. **Verificação por Terceiros**: Amigos confirmam se você realmente fez
2. **Categorias**: Organizar tarefas por tipo (estudo, fitness, trabalho)
3. **Histórico de Performance**: Estatísticas de quantas % você completa
4. **Recompensas Extras**: Bônus por sequências de tarefas completadas

### **Versão 3.0 - Social**
1. **Grupos de Apoio**: Criar tarefas em equipe
2. **Competições**: Quem completa mais tarefas ganha prêmio
3. **Mentoria**: Sistema de coaches que acompanham progresso
4. **NFTs de Conquista**: Certificados digitais por marcos alcançados



## 🐛 Troubleshooting - Erros Comuns

### **❌ "encode length mismatch: expected 3 types, got 2"**

**Problema**: Comando cast não tem todos os parâmetros

**Solução**: Certifique-se de que todos os 3 parâmetros estão em linhas separadas:
```bash
# ✅ CORRETO - 3 parâmetros separados
cast send ENDERECO "createTask(string,string,uint256)" \
  "Título" \
  "Descrição" \
  $DEADLINE \
  --value 0.001ether \
  --private-key $PRIVATE_KEY \
  --rpc-url $SEPOLIA_RPC_URL

# ❌ ERRADO - parâmetros juntos na mesma linha
cast send ENDERECO "createTask(string,string,uint256)" \
  "Título" "Descrição" $DEADLINE \
  --value 0.001ether
```

### **❌ "Prazo deve ser maior que agora"**

**Problema**: Deadline no passado

**Solução**: Use timestamp futuro:
```bash
# ✅ CORRETO - 7 dias no futuro
DEADLINE=$(($(date +%s) + 604800))

# ❌ ERRADO - pode estar no passado
DEADLINE=1735689600
```

### **❌ "Valor minimo e 0.001 ether"**

**Problema**: Valor enviado muito baixo

**Solução**: Use pelo menos 0.001 ETH:
```bash
# ✅ CORRETO
--value 0.001ether

# ❌ ERRADO
--value 0.0001ether
```

### **❌ "Apenas o criador pode completar"**

**Problema**: Tentando completar tarefa de outro usuário

**Solução**: Use a mesma chave privada que criou a tarefa:
```bash
# Use a MESMA private key para criar e completar
--private-key $PRIVATE_KEY
```

### **❌ Contrato não verificado no Etherscan**

**Problema**: Deploy sem verificação ou falha na verificação

**Solução**: Verificar manualmente:
```bash
# Verificar após deploy
forge verify-contract ENDERECO_CONTRATO \
  src/TaskManager.sol:TaskManager \
  --etherscan-api-key $ETHERSCAN_API_KEY \
  --chain sepolia
```

---

## 🎓 O Que Você Aprendeu

### **Conceitos de Blockchain**
- **Smart Contracts**: Programas que rodam na blockchain
- **Gas**: Taxa para executar operações
- **Events**: Logs que ficam gravados permanentemente
- **Mapping**: Estrutura de dados como "dicionário"
- **Payable**: Funções que podem receber ETH
- **block.timestamp**: Como acessar o tempo da blockchain

### **Conceitos de Solidity**
- **Structs**: Como organizar dados relacionados
- **Mappings**: Estruturas chave-valor para armazenamento
- **Modifiers e Requires**: Como validar condições
- **Storage vs Memory**: Onde os dados ficam armazenados
- **Events**: Sistema de notificação da blockchain
- **msg.sender**: Como saber quem chamou a função
- **msg.value**: Como saber quanto ETH foi enviado

### **Padrões de Segurança Implementados**
- **Checks-Effects-Interactions (CEI)**: Validações → Mudanças de estado → Interações externas
- **Reentrancy Protection**: `stakeReturned` protege contra chamadas duplas
- **Access Control**: `msg.sender` garante que só dono completa tarefa
- **Input Validation**: `require()` valida todos os parâmetros
- **Safe Transfer**: `.call()` em vez de `.transfer()` para segurança

### **Otimizações de Gas Implementadas**
- **Constant**: `MINIMUM_STAKE` não usa storage
- **Memory para leitura**: Strings usam `memory` quando só lidas
- **Storage para modificação**: Uso direto quando modificando dados
- **Events em vez de Storage**: Logs baratos para notificações
- **Packed structs**: Campos organizados para economia de storage

---

## 🏆 Conclusão

Este projeto demonstra como a tecnologia blockchain pode ser usada para resolver problemas do mundo real de forma simples e efetiva. O sistema de "stake" cria um incentivo financeiro real para cumprir compromissos pessoais, combinando psicologia comportamental com tecnologia descentralizada.

**🎯 Principais Lições**:
1. **Simplicidade Funciona**: Menos features = mais foco no essencial
2. **Incentivos Importam**: Dinheiro real cria compromisso real
3. **Descentralização Empodera**: Você controla seus próprios dados e dinheiro
4. **Transparência Gera Confiança**: Tudo é verificável na blockchain

---

## 🚀 Extra: Prompt para Recriar o Contrato

### **Prompt para Recriar o Contrato Inteligente "TaskManager"**

Crie um contrato inteligente em Solidity chamado "TaskManager" que permita aos usuários criar, gerenciar e concluir tarefas associadas a prazos e valores apostados (stakes). O contrato deve atender aos seguintes requisitos:

#### **Estrutura de Dados**

Armazenar informações de cada tarefa, incluindo:

- Um identificador único para cada tarefa.
- Um título descritivo.
- Uma descrição detalhada.
- A data de criação da tarefa.
- Um prazo para conclusão (data futura).
- O status atual da tarefa (pendente ou concluída).
- O endereço do criador da tarefa.
- O valor apostado (stake) associado à tarefa.
- Um indicador que mostre se o valor apostado já foi processado.

#### **Funcionalidades Principais**

Permitir que usuários criem novas tarefas fornecendo:

- Um título, uma descrição e um prazo (que deve ser uma data futura).
- Um valor apostado mínimo de 0.001 ether, enviado junto com a criação.

Restringir a conclusão de tarefas apenas ao criador da tarefa.

Processar o valor apostado da seguinte forma:

- Devolver o valor ao criador se a tarefa for concluída antes do prazo.
- Considerar o valor perdido se o prazo expirar sem conclusão.

Oferecer uma maneira de os usuários consultarem todas as tarefas que eles próprios criaram.

Possibilitar a verificação se uma tarefa está atrasada com base no prazo e no tempo atual.

Disponibilizar informações gerais, como:

- O número total de tarefas criadas no contrato.
- O saldo total de ether atualmente armazenado no contrato.

#### **Notificações**

Gerar notificações públicas (eventos) nos seguintes casos:

- Quando uma nova tarefa é criada.
- Quando uma tarefa é concluída.
- Quando o valor apostado é perdido devido ao atraso.

#### **Segurança**

Garantir que as transferências de ether sejam feitas de forma segura, verificando se foram concluídas com sucesso.

#### **Especificações Técnicas**

- Utilizar a versão 0.8.13 do Solidity.
- Incluir a licença MIT no início do código.
- Usar estruturas de mapeamento para organizar as tarefas e associá-las aos respectivos criadores.
- Fornecer uma forma de consultar os detalhes completos de uma tarefa específica.
- Incluir uma maneira de determinar se uma tarefa está atrasada em relação ao prazo.
- Permitir consulta ao número total de tarefas criadas e ao saldo atual do contrato.

---

*README criado para fins educacionais, explicando conceitos de blockchain e smart contracts de forma acessível para iniciantes.*