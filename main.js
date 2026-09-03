import Task from './taskModel.js';

const args = process.argv.slice(2);

switch(args[0]) {
    case 'list':
        console.log(new Task().list());
        break;
    case 'listByStatus':
        console.log(new Task().listByStatus(args[1]));
        break;
    case 'add':
        new Task().createNewTask(args[1]);
        break;
    case 'update':
        new Task().updateTask(parseInt(args[1]), args[2]);
        break;
    case 'delete':
        new Task().deleteTask(parseInt(args[1]));
        break;
    case 'mark-in-progress':
    case 'mark-done':
        const status = args[0] === 'mark-in-progress' ? 'in-progress' : 'done';
        new Task().updateTaskStatus(parseInt(args[1]), status);
        break;
    default:
        console.log('Invalid command. Use "list" or "listByStatus <status>".');
}