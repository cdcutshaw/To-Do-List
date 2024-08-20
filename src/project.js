export default class projectController {
    constructor() {
        this.projectList = ['General', 'The Odin Project', 'Chores', 'Errands', 'Appointments']
    }

    getProjects() {
        console.log(this.projectList);
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
            
        }
    }

    updateProject(projectTitle, newProjectTitle) {
        const index = this.projectList.findIndex((project) => project === projectTitle);
        if (index !== -1) {
            this.projectList[index] = newProjectTitle;
        }
    }
}



