import "./styles.css";
import projectController from "./project"
import todoControlllerController from "./to-do"


const project = new projectController();
//test project logic
/* project.getProjects();
project.clearProjects();
project.getProjects();
project.createProject('chores');
project.createProject('errands');
project.getProjects();
project.deleteProject('errands');
project.getProjects();
project.updateProject('chores', 'housework')
project.getProjects(); */

const todo = new todoControlllerController();
//test todo logic
todo.getTodos();
todo.createTodo('todo project', 'finish todo project logic', '8/21/2024', 'TOP','high', 'incomplete')
todo.createTodo('clean kitchen', 'dishes,wipe down surfaces', 'none', 'chores','low', 'complete')
todo.createTodo('groceries', 'pick up groceries', '8/25/2024', 'errands','medium', 'incomplete')
todo.createTodo('trash', 'take out trash', '8/21/2024', 'chores','low', 'incomplete')
todo.getTodos();
todo.deleteTodo(1);
todo.getTodos();
todo.getTodobyIndex(2);
todo.updateTodo(2, 'trash', 'take out trash', '8/21/2024', 'housework','low', 'incomplete')
todo.getTodos();

