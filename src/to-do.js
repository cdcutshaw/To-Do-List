
class todoItem {
  constructor (title, description, dueDate, project, priority)  {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority;
  }

};

export default class todoControlller {
    constructor() {
        this.todoList = [];
        this.completedList = [];
    }
    
    getTodos() {
        return this.todoList
    }

    getcompletedTodos() {
        this.clearCompleted()
        this.pushStoredCompleted() 
        this.SaveToLocal();
        return this.completedList;
    }

    
    clearTodos() {
        this.todoList = []; 
    } 

    clearCompleted(){
        this.completedList = []
    }

    createTodo(title, description, dueDate, project, priority, /* completionStatus*/)  {
        this.pushStoredtodos()
        const newTodo = new todoItem(title, description, dueDate, project, priority/* , completionStatus */);
        this.todoList.push(newTodo);
        this.SaveToLocal();
        return this.todoList;
        
    }

    deleteTodo(itemIndex) {
        this.pushStoredtodos() 
        const index = this.todoList.findIndex;
        if(index !== -1) {
            this.todoList.splice(itemIndex, 1);
            this.SaveToLocal();
        }
    }

    getTodobyIndex(itemIndex) {
        const index = this.todoList.findIndex;
        const todoItem = this.todoList[itemIndex]
        if(index !== -1) {
            console.log(todoItem);
            this.SaveToLocal();
            return todoItem
        }
    }

    pushComplete (itemIndex) {
        const selectedtodoItem = this.todoList[itemIndex]
        this.completedList.push(selectedtodoItem)
        this.deleteTodo(itemIndex);
        this.SaveToLocal();
        return (this.completedList)
    }

    pushStoredtodos() {
        this.clearTodos() 
        const storedTodos = JSON.parse(localStorage.getItem('todoList'))
        for (const item of storedTodos) {
            let title = item.title
            let description = item.description
            let dueDate = item.dueDate
            let project = item.project
            let priority = item.priority
            const newTodo = new todoItem(title, description, dueDate, project, priority)
            if(!this.todoList.includes(item.title)) { 
            this.todoList.push(newTodo)  
            }  
        } 
    }

    pushStoredCompleted(){
        const storedCompleted = JSON.parse(localStorage.getItem('completedList'))
        for (const item of storedCompleted) {
            let title = item.title
            let description = item.description
            let dueDate = item.dueDate
            let project = item.project
            let priority = item.priority
            const completedItem = new todoItem(title, description, dueDate, project, priority)
                this.completedList.push(completedItem)      
        }
    }

    SaveToLocal() {
        localStorage.setItem("todoList", JSON.stringify(this.todoList));
        localStorage.setItem("completedList", JSON.stringify(this.completedList));
        
    }
}

