
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

    clearStoredCompleted() {
        this.clearCompleted()
        this.SaveToLocal()
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
        let storedTodos = JSON.parse(localStorage.getItem('todoList'))
        storedTodos = storedTodos.filter(Boolean);
        if (storedTodos.length !== 0) {
            console.log(storedTodos)
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
        return this.todoList
        } 
        else if (storedTodos.length === 0) {
            return this.todoList
        }
       
    }

    pushStoredCompleted(){
        
        let storedCompleted = JSON.parse(localStorage.getItem('completedList'))
        storedCompleted = storedCompleted.filter(Boolean);
        if (storedCompleted.length !== 0) {
        for (const item of storedCompleted) {
            let title = item.title
            let description = item.description
            let dueDate = item.dueDate
            let project = item.project
            let priority = item.priority
            const completedItem = new todoItem(title, description, dueDate, project, priority)
                this.completedList.push(completedItem)      
        } 
            return this.completedList
        }
        else if (storedCompleted === 0){
            return this.completedList
        }
    }



    SaveToLocal() {
        localStorage.setItem("todoList", JSON.stringify(this.todoList));
        localStorage.setItem("completedList", JSON.stringify(this.completedList));
        
    }
}

