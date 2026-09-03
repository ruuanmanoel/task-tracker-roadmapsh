import fs from "fs";

class Task {
    constructor() {}

    createNewTask(description) {
        const tasks = this.list();
        const { id } = tasks.at(-1) || { id: 0 };
        const task = { 
            id: id + 1, 
            description,
            status: "todo",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        tasks.push(task);
        fs.writeFileSync("task.json", JSON.stringify(tasks, null, 2));
        console.log(`Task added successfully (ID: ${task.id})`);
    }

    list() {
        const data = fs.readFileSync("task.json", "utf-8");
        return JSON.parse(data);
    }

    listByStatus(status) {
        const tasks = this.list();
        return tasks.filter(task => task.status === status);
    }

    updateTask(id, newDescription) {
        const tasks = this.list();
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) {
            console.log(`Task with ID ${id} not found.`);
            return;
        }
        tasks[taskIndex].description = newDescription;
        tasks[taskIndex].updatedAt = new Date().toISOString();
        fs.writeFileSync("task.json", JSON.stringify(tasks, null, 2));
        console.log(`Task with ID ${id} updated successfully.`);
    }

    updateTaskStatus(id, newStatus) {
        const tasks = this.list();
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) {
            console.log(`Task with ID ${id} not found.`);
            return;
        }
        tasks[taskIndex].status = newStatus;
        tasks[taskIndex].updatedAt = new Date().toISOString();
        fs.writeFileSync("task.json", JSON.stringify(tasks, null, 2));
        console.log(`Task with ID ${id} status updated successfully.`);
    }

    deleteTask(id) {
        const tasks = this.list();
        const taskIndex = tasks.findIndex(task => task.id === id);  
        if (taskIndex === -1) {
            console.log(`Task with ID ${id} not found.`);
            return;
        }
        tasks.splice(taskIndex, 1);
        fs.writeFileSync("task.json", JSON.stringify(tasks, null, 2));
        console.log(`Task with ID ${id} deleted successfully.`);
    }


}

export default Task;