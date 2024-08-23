
class todoItem {
  constructor (title, description, dueDate, project, priority, completionStatus)  {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority;
    this.completionStatus = completionStatus;
  }

};

export default class todoControlller {
    constructor() {
        this.todoList = [];
    }
    
    getTodos() {
        console.log(this.todoList);
        return this.todoList
    }

    clearTodos() {
        this.todoList = [];
        
    }

    createTodo(title, description, dueDate, project, priority, completionStatus) {
        const newTodo = new todoItem(title, description, dueDate, project, priority, completionStatus);
        this.todoList.push(newTodo);
        return newTodo
    }

    deleteTodo(itemIndex) {
        const index = this.todoList.findIndex;
        if(index !== -1) {
            this.todoList.splice(itemIndex, 1);
            
        }
    }

    getTodobyIndex(itemIndex) {
        const index = this.todoList.findIndex;
        const todoItem = this.todoList[itemIndex]
        if(index !== -1) {
            console.log(todoItem);
            return todoItem
        }
    }

    updateTodo(itemIndex, title, description, dueDate, project, priority, completionStatus) {
        const selectedtodoItem = this.todoList[itemIndex];
        
            selectedtodoItem.title = title;
            selectedtodoItem.description = description;
            selectedtodoItem.dueDate = dueDate;
            selectedtodoItem.project = project;
            selectedtodoItem.priority = priority;
            selectedtodoItem.completionStatus =  completionStatus;
        

    }
}

