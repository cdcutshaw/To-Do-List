export default class projectController {
    constructor() {
        this.projectList = ['General']
    }

    getProjects() {
        return this.projectList;
    }

    pushStoredtoList() {
        
        let storedProjects = JSON.parse(localStorage.getItem('projectList'))
        storedProjects = storedProjects.filter(Boolean);
        if (storedProjects.length !== 0){
        for (const item of storedProjects) {
            if(!this.projectList.includes(item)) {
            this.projectList.push(item) 
          }} 
         return this.projectList;
        }
        else if (storedProjects.length === 0) {
            return this.projectList;
        }
    
    } 
  
    createProject(projectTitle) {
        this.pushStoredtoList() 
        if(!this.projectList.includes(projectTitle)) {
            this.projectList.push(projectTitle);
            this.SaveToLocal();
        }
        
    }

    deleteProject(projectTitle) {
        
        const index = this.projectList.findIndex((project) => project === projectTitle);
        if(index !== -1) {
            this.projectList.splice(index, 1);
            this.SaveToLocal();
            
        }
    }

    //not currently used but may add functionality to edit projects at later time
    /* updateProject(projectTitle, newProjectTitle) {
        const index = this.projectList.findIndex((project) => project === projectTitle);
        if (index !== -1) {
            this.projectList[index] = newProjectTitle;
        }

    } */

        
    SaveToLocal() {
        localStorage.setItem("projectList", JSON.stringify(this.projectList));
    }
    
}



