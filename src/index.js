import "./styles.css";
import projectController from "./project"
import todoControlller from "./to-do"





function loadPage() {
    const project = new projectController();
    const todo = new todoControlller();
    const display = document.getElementById('activeTodos');
    
    

    todo.createTodo('todo project', 'finish todo project logic', '8/21/2024', 'TOP','high', 'incomplete')
    todo.createTodo('clean kitchen', 'dishes,wipe down surfaces', 'none', 'chores','low', 'complete')
    todo.createTodo('groceries', 'pick up groceries', '8/25/2024', 'errands','medium', 'incomplete')
    todo.createTodo('trash', 'take out trash', '8/21/2024', 'chores','low', 'incomplete')
    
    const makeProjectButton = () => {
        project.getProjects();
        
        const  projects = document.getElementById('projectList');
        const projectBtn = document.createElement("button");
        projects.appendChild(projectBtn);
         
        return projectBtn;
    };
    
    const makeTodoCard = (element) => {
        todo.getTodos();
        const activeTodos = document.getElementById('activeTodos');
        const todoCard = document.createElement('div');
        const todoTitle = document.createElement('div');
        const todoDescription = document.createElement('div');
        const todoDueDate = document.createElement('div');
        const todoproject = document.createElement('div');
        const todopriority = document.createElement('div');
        const markComplete = document.createElement('input')
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        
           
        todoCard.id = todo.todoList.indexOf(element);  
        todoCard.className = 'todoCard';
        deleteBtn.id = ('deleteBtn');
        
        todoTitle.textContent = `${element.title}`; 
        todoDescription.textContent = `Description: ${element.description}`; 
        todoDueDate.textContent = `Due: ${element.dueDate}`; 
        todoproject.textContent = `Project: ${element.project}`; 
        todopriority.textContent = `Priority: ${element.priority}`;
        deleteBtn.textContent = `Delete`
        editBtn.textContent =`Edit`

        markComplete.type ='checkbox';
        
        markComplete.addEventListener('change', () => {
            const itemIndex = todo.todoList.indexOf(element)
            if (markComplete.checked = true){
                todo.pushComplete(itemIndex);
                clearDisplay();
            displayAllTodos();
            console.log(todo.completedList)
            };
        })

        deleteBtn.addEventListener("click", () =>{
            const itemIndex = todo.todoList.indexOf(element)
            todo.deleteTodo(itemIndex);
            clearDisplay();
            displayAllTodos();
        })

        

            
        activeTodos.appendChild(todoCard);
        todoCard.append(markComplete);
        todoCard.appendChild(todoTitle);
        todoCard.appendChild(todoproject);
        todoCard.appendChild(todoDescription);
        todoCard.appendChild(todoDueDate);
        todoCard.appendChild(todopriority);
        todoCard.appendChild(deleteBtn);
        todoCard.appendChild(editBtn);


  }
    const addTodo = () => {
        
        const dialog = document.querySelector('dialog')
        const addBtn = document.querySelector('.addTodo');
        addBtn.addEventListener("click", () => {
            dialog.showModal();
        
        })
        const closeBtn = document.getElementById('closeBtn') 
        closeBtn.addEventListener("click", () => {
             dialog.close();
             
            
        })
        document.getElementById('todoForm').onsubmit = (event) => {
            event.preventDefault();
             todo.getTodos();
            const title = document.getElementById('title').value;
            const project = document.getElementById('project').value;
            const description = document.getElementById('description').value;
            const dueDate = document.getElementById('dueDate').value;
            const priority = document.getElementById('priority').value;

             todo.createTodo(title, description, dueDate, project, priority); 
            
            dialog.close();
            clearDisplay();
            displayAllTodos();
            document.getElementById('tadodoForm').reset(); 
            
            

        }
    }  
    
    //const addProject
    //const editTodo
    //const displayTodobyProject
    //const displayCompletedTodos
   


    const displayProjects = () => {
        project.getProjects();
        for(const element of project.projectList){
            const btn = makeProjectButton(element);
            btn.textContent = element  
        }
    }

    const clearDisplay = () => {
        display.textContent = ''
    }

    const displayAllTodos = () => {
        todo.getTodos();
        for (const element of todo.todoList) {
            makeTodoCard(element);
        }  
    } 

    


return displayProjects(), displayAllTodos(), addTodo();
}

loadPage();
