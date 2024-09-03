import "./styles.css";
import projectController from "./project"
import todoControlller from "./to-do"





function loadPage() {
    const project = new projectController();
    const todo = new todoControlller();
    const display = document.getElementById('activeTodos');
    const displayHeading = document.getElementById('displayHeading')
    const projectsDisplay = document.getElementById('projectList')
    
    

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
        todoCard.className = ('todoCard');
        deleteBtn.id = ('deleteBtn');
        markComplete.id = ('markComplete');
        editBtn.id = ('editBtn')
        
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
                const selectedCard = document.getElementById(todoCard.id)
                selectedCard.remove();
            };
        })

        deleteBtn.addEventListener("click", () => {
            const itemIndex = todo.todoList.indexOf(element)
            const selectedCard = document.getElementById(todoCard.id)
            selectedCard.remove();
            todo.deleteTodo(itemIndex);
        })
        
        editBtn.addEventListener("click", () => {

            const Title = document.getElementById('title');
            const project = document.getElementById('project');
            const description = document.getElementById('description');
            const dueDate = document.getElementById('dueDate');
            const priority = document.getElementById('priority');
            
            addTodoDialog.showModal(); 
            Title.value = element.title;
            project.value = element.project;
            description.value = element.description;
            dueDate.value = element.dueDate;
            priority.value =element.priority;  

            const itemIndex = todo.todoList.indexOf(element)
            todo.deleteTodo(itemIndex);
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
        
        const addTodoDialog = document.getElementById('addTodoDialog')
        const addBtn = document.querySelector('.addTodo');
        addBtn.addEventListener("click", () => {
            addTodoDialog.showModal();
        
        })
        
        const closeBtn = document.getElementById('closeBtn') 
        closeBtn.addEventListener("click", () => {
            document.getElementById('todoForm').reset(); 
             addTodoDialog.close();
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
            
            addTodoDialog.close();
            clearDisplay();
            displayAllTodos();
            pushProjectstoList();
            document.getElementById('todoForm').reset(); 

        }
    }  


    const displayProjects = () => {
        project.getProjects();
        for(const element of project.projectList){
            const projectBtn = makeProjectButton(element);
            const projectTitle = element;
            projectBtn.textContent = projectTitle

            
          
            projectBtn.addEventListener ("click", () =>{
                clearDisplay();
                displayHeading.textContent = `Project: ${projectTitle}`
                const filteredtodos = todo.todoList.filter(element => element.project === projectTitle)
                for (const item of filteredtodos) {
                  makeTodoCard(item)  
                }

               HandleDeleteProject(projectTitle)
               
            }) 
        }
    }
const addProject = () => {
        const addProjectDialog = document.getElementById('addProjectDialog')
        const addProjectBtn = document.querySelector('.addProjects'); 
        addProjectBtn.addEventListener("click", () => {
            addProjectDialog.showModal();
        })

        const projectFormCloseBtn = document.getElementById('projectFormCloseBtn') 
        projectFormCloseBtn.addEventListener("click", () => {
            document.getElementById('projectForm').reset(); 
             addProjectDialog.close();
            }) 

        document.getElementById('projectForm').onsubmit = (event) => {
            event.preventDefault();
            const newProject = document.getElementById('newProject').value;
            project.createProject(newProject);
            addProjectDialog.close();
            clearProjectDisplay();
            displayProjects();
            document.getElementById('projectForm').reset();
        }

    }

    const HandleDeleteProject = (projectTitle) => {
        const deleteProjectBtn = document.createElement('button')
        deleteProjectBtn.textContent = `Delete Project`
        displayHeading.appendChild(deleteProjectBtn)
        console.log(projectTitle)

        if (projectTitle === 'General') {
            deleteProjectBtn.remove();
        }

        deleteProjectBtn.addEventListener("click", () => {
            project.deleteProject(projectTitle);
            clearProjectDisplay();
            clearDisplay();
            displayProjects();
            deleteTodoByProject(projectTitle)  
            displayAllTodos(); 
        })
    }

    const deleteTodoByProject = (projectTitle) => {
        const filteredtodos = todo.todoList.filter(element => element.project === projectTitle)
                for (const item of filteredtodos) {
                   const itemIndex = todo.todoList.indexOf(item)
                    todo.deleteTodo(itemIndex); 
                } 
    }  

    const clearDisplay = () => {
        display.textContent = ''
    }
    const clearProjectDisplay = () => {
        projectsDisplay.textContent = ''
    }

    const displayAllTodos = () => {
        todo.getTodos();
        for (const element of todo.todoList) {
            makeTodoCard(element);
            displayHeading.textContent = `All Active TODOs`
        }  
    } 

    const displayCompletedTodos = () => {
        todo.getcompletedTodos();
        for(const element of todo.completedList) {
            makeTodoCard(element);
            markComplete.remove();
            editBtn.remove();
        }
    }

    const pushProjectstoList  = () => {
        for(const element of todo.todoList){
            project.createProject(element.project);
            }
            projectsDisplay.textContent = ""
            displayProjects();
    }

    

    const handleCompletedBtn = () => {
        const completedBtn =  document.getElementById('completedBtn')
        completedBtn.addEventListener("click", () => {
            clearDisplay();
            displayHeading.textContent = `Completed TODOs`
            displayCompletedTodos();

        })
    }

    const handleAllTodosBtn = () => {
        const allTodosBtn = document.getElementById('allTodosBtn')
        allTodosBtn.addEventListener("click", () => {
            clearDisplay();
            displayAllTodos();
        })
    }

return displayAllTodos(), addTodo(), addProject(), pushProjectstoList(), handleAllTodosBtn(), handleCompletedBtn();
}

loadPage();
