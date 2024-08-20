import "./styles.css";
import projectController from "./project"


const project = new projectController();
//test project logic
project.getProjects();
project.clearProjects();
project.getProjects();
project.createProject('chores');
project.createProject('errands');
project.getProjects();
project.deleteProject('errands');
project.getProjects();
project.updateProject('chores', 'housework')
project.getProjects();



