
# Task Tracker CLI 📝

A simple command-line interface (CLI) application for tracking and managing tasks.

This project was developed using **Node.js** and **JavaScript**, with the goal of practicing command-line arguments, file system operations, JSON persistence, and CRUD operations.

## 🚀 Technologies

-   [Node.js](https://nodejs.org/)
-   JavaScript
-   JSON
-   Node.js File System (`fs`)

No external libraries or frameworks are used in this project.

## 📋 Features

The application allows you to:

-   ✅ Add tasks
-   ✏️ Update tasks
-   🗑️ Delete tasks
-   🔄 Mark tasks as in progress
-   ✔️ Mark tasks as done
-   📋 List all tasks
-   ⏳ List pending tasks
-   🔄 List tasks in progress
-   ✅ List completed tasks

## 📦 Task Properties

Each task contains the following properties:

Property

Description

`id`

A unique identifier for the task

`description`

A short description of the task

`status`

The task status: `todo`, `in-progress`, or `done`

`createdAt`

Date and time when the task was created

`updatedAt`

Date and time when the task was last updated

Example:

```json
{
  "id": 1,
  "description": "Buy groceries",
  "status": "todo",
  "createdAt": "2026-09-02T21:00:00.000Z",
  "updatedAt": "2026-09-02T21:00:00.000Z"
}

```

## 📁 Project Structure

```text
task-tracker/
├── src/
│   └── index.js
├── tasks.json
├── package.json
├── package-lock.json
└── README.md

```

The `tasks.json` file is automatically created if it doesn't exist.

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>

```

### 2. Navigate to the project directory

```bash
cd task-tracker

```

### 3. Install dependencies

This project does not use external dependencies, but you can install the project with:

```bash
npm install

```

## 💻 Usage

The application uses positional command-line arguments.

### Add a task

```bash
node src/index.js add "Buy groceries"

```

Output:

```text
Task added successfully (ID: 1)

```

### Update a task

```bash
node src/index.js update 1 "Buy groceries and cook dinner"

```

### Delete a task

```bash
node src/index.js delete 1

```

### Mark task as in progress

```bash
node src/index.js mark-in-progress 1

```

### Mark task as done

```bash
node src/index.js mark-done 1

```

### List all tasks

```bash
node src/index.js list

```

### List completed tasks

```bash
node src/index.js list done

```

### List pending tasks

```bash
node src/index.js list todo

```

### List tasks in progress

```bash
node src/index.js list in-progress

```

## 🧪 Example

A complete example of using the CLI:

```bash
node src/index.js add "Study JavaScript"
node src/index.js add "Go to the gym"
node src/index.js add "Read a book"

node src/index.js list

node src/index.js mark-in-progress 1
node src/index.js mark-done 2

node src/index.js list done
node src/index.js list in-progress
node src/index.js list todo

```

## 🗃️ Data Storage

Tasks are stored locally in a `tasks.json` file.

Example:

```json
[
  {
    "id": 1,
    "description": "Study JavaScript",
    "status": "in-progress",
    "createdAt": "2026-09-02T21:00:00.000Z",
    "updatedAt": "2026-09-02T21:30:00.000Z"
  },
  {
    "id": 2,
    "description": "Go to the gym",
    "status": "done",
    "createdAt": "2026-09-02T21:01:00.000Z",
    "updatedAt": "2026-09-02T21:35:00.000Z"
  }
]

```

## 🛡️ Error Handling

The application handles common errors gracefully, such as:

-   Invalid task IDs
-   Tasks that don't exist
-   Empty task descriptions
-   Invalid commands
-   Invalid task statuses
-   Missing `tasks.json`
-   Invalid JSON data

## 🎯 Learning Goals

This project was created to practice the following concepts:

-   Node.js
-   JavaScript
-   CLI applications
-   `process.argv`
-   File system operations with `fs`
-   Reading and writing JSON files
-   CRUD operations
-   Array manipulation
-   Date and time handling
-   Error handling
-   Git and GitHub

## 📌 Challenge Requirements

The application follows these requirements:

-   Run from the command line
-   Accept user input as positional arguments
-   Store tasks in a JSON file
-   Create the JSON file if it doesn't exist
-   Use Node.js native file system APIs
-   Avoid external libraries and frameworks
-   Handle errors and edge cases
-   Add tasks
-   Update tasks
-   Delete tasks
-   Mark tasks as in progress
-   Mark tasks as done
-   List tasks
-   Filter tasks by status

## 📚 What I Learned

Through this project, I practiced building a CLI application with Node.js and learned how to:

-   Work with command-line arguments using `process.argv`
-   Manipulate files using Node.js `fs`
-   Persist application data using JSON
-   Create and update objects dynamically
-   Implement CRUD functionality
-   Validate user input
-   Handle errors in a CLI application

## 👨‍💻 Author

Developed as part of a programming challenge to practice Node.js and JavaScript.