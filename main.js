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
    default:
        console.log('Invalid command. Use "list" or "listByStatus <status>".');
}