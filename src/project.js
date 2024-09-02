export default class projectController {
    constructor() {
        this.projectList = ['General']
    }

    getProjects() {
        return this.projectList;
    }

    clearProjects() {
        this.projectList = ['General'];
    }

    createProject(projectTitle) {
        if(!this.projectList.includes(projectTitle)) {
            this.projectList.push(projectTitle);
    
        }
    }

    deleteProject(projectTitle) {
        const index = this.projectList.findIndex((project) => project === projectTitle);
        if(index !== -1) {
            this.projectList.splice(index, 1);
            console.log(this.projectList)
            
        }
    }

    updateProject(projectTitle, newProjectTitle) {
        const index = this.projectList.findIndex((project) => project === projectTitle);
        if (index !== -1) {
            this.projectList[index] = newProjectTitle;
        }

    }

    
    
}



