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



}

export default Task;