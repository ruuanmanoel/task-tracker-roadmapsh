# Task Tracker CLI

Aplicação de linha de comando (CLI) para criar, consultar, atualizar e
remover tarefas. Os dados ficam persistidos localmente em um arquivo JSON,
sem banco de dados, frameworks ou dependências externas.

## Funcionalidades

- Criar tarefas com descrição, identificador e datas de criação e atualização.
- Listar todas as tarefas.
- Filtrar tarefas por status.
- Editar a descrição de uma tarefa existente.
- Marcar uma tarefa como em andamento ou concluída.
- Excluir tarefas.
- Criar automaticamente o arquivo de dados quando ele ainda não existe.

## Tecnologias

- [Node.js](https://nodejs.org/)
- JavaScript com módulos ES (`type: module`)
- Módulo nativo `fs` do Node.js
- JSON para persistência dos dados

Nenhuma biblioteca externa é necessária.

## Requisitos

- Node.js com suporte a `Array.prototype.at` e módulos ES.
- Um terminal para executar os comandos.

Confira a instalação do Node.js com:

```bash
node --version
```

## Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/ruuanmanoel/task-tracker-roadmapsh.git
cd task-tracker
```

O projeto não possui dependências de produção. Portanto, não é necessário
executar `npm install` para usar a CLI.

## Uso

Todos os comandos seguem o formato:

```bash
node main.js <comando> [argumentos]
```

### Adicionar uma tarefa

Use uma descrição entre aspas quando ela tiver espaços:

```bash
node main.js add "Estudar JavaScript"
```

Saída esperada:

```text
Task added successfully (ID: 1)
```

Novas tarefas recebem o status `todo` e um ID sequencial baseado na última
tarefa do arquivo.

### Listar todas as tarefas

```bash
node main.js list
```

A saída é um array JSON impresso no terminal. Se `task.json` não existir, ele
será criado com um array vazio (`[]`).

### Filtrar por status

```bash
node main.js list todo
node main.js list in-progress
node main.js list done
```

Os três status usados pela aplicação são:

| Status | Significado |
| --- | --- |
| `todo` | Tarefa pendente, ainda não iniciada |
| `in-progress` | Tarefa em andamento |
| `done` | Tarefa concluída |

### Atualizar a descrição

```bash
node main.js update 1 "Estudar JavaScript e Node.js"
```

O campo `updatedAt` também é alterado. O ID deve ser um número inteiro.

### Marcar como em andamento

```bash
node main.js mark-in-progress 1
```

### Marcar como concluída

```bash
node main.js mark-done 1
```

As duas operações atualizam o status e o campo `updatedAt`.

### Excluir uma tarefa

```bash
node main.js delete 1
```

A tarefa é removida permanentemente de `task.json`.

## Exemplo completo

```bash
node main.js add "Estudar JavaScript"
node main.js add "Ir à academia"
node main.js add "Ler um livro"

node main.js list
node main.js mark-in-progress 1
node main.js mark-done 2
node main.js update 3 "Ler um livro técnico"

node main.js list done
node main.js list in-progress
node main.js list todo
node main.js delete 3
```

## Persistência dos dados

As tarefas são salvas no arquivo `task.json`, na pasta em que o comando é
executado. O arquivo é atualizado a cada criação, alteração de descrição,
alteração de status ou exclusão.

Exemplo de uma tarefa:

```json
{
  "id": 1,
  "description": "Estudar JavaScript",
  "status": "in-progress",
  "createdAt": "2026-09-02T21:00:00.000Z",
  "updatedAt": "2026-09-02T21:30:00.000Z"
}
```

### Campos da tarefa

| Campo | Descrição |
| --- | --- |
| `id` | Identificador numérico da tarefa |
| `description` | Texto descritivo da tarefa |
| `status` | `todo`, `in-progress` ou `done` |
| `createdAt` | Data de criação em formato ISO 8601 |
| `updatedAt` | Data da última alteração em formato ISO 8601 |

## Estrutura do projeto

```text
task-tracker/
|-- main.js       # Entrada da CLI e roteamento dos comandos
|-- taskModel.js  # Operações de leitura, escrita e manipulação das tarefas
|-- task.json     # Dados persistidos localmente
|-- package.json  # Metadados e configuração do Node.js
`-- readme.md     # Documentação do projeto
```

## Comportamento e limitações atuais

- Mensagens de sucesso e erro são exibidas em inglês porque fazem parte da
  implementação atual.
- Um ID inexistente não altera o arquivo e produz uma mensagem informativa.
- Um comando desconhecido exibe uma mensagem de uso básica.
- O programa espera que os argumentos necessários sejam fornecidos na ordem
  correta.
- A descrição é recebida diretamente como argumento; não há validação
  dedicada para descrição vazia.
- O filtro por status compara o texto exatamente. Valores diferentes de
  `todo`, `in-progress` e `done` apenas retornam uma lista vazia.
- O arquivo JSON precisa conter dados válidos para ser lido corretamente.
- O ID de uma nova tarefa é calculado a partir da última tarefa do arquivo;
  como o arquivo é um array ordenado, a aplicação presume que a última tarefa
  possui o maior ID.

## Aprendizados praticados

Este projeto exercita:

- Leitura de argumentos com `process.argv`.
- Criação de uma CLI com comandos posicionais.
- Leitura e escrita de arquivos usando `fs`.
- Persistência e serialização com JSON.
- Operações CRUD (criar, consultar, atualizar e excluir).
- Filtragem e manipulação de arrays.
- Uso de datas no formato ISO 8601.
- Organização de responsabilidades entre o arquivo de entrada e o modelo.

## Licença

Este projeto está publicado sob a licença ISC, conforme definido em
`package.json`.
