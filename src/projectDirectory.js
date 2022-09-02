import { directory } from "./init.js";
import { Project } from "./project.js";

export class ProjectDirectory {
  projects = [];
  projectID = 0;
  taskID = 0;
  activeProject;
  colors = ["#1af045", "#a51af0", "#f01a9a", "#f0771a", "#f0de1a", "#00b4b4"];
  colorCounter = 0;

  setLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }

  getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("projects"));
    return data;
  }

  addProject(title, color) {
    const newProject = new Project(title, color);
    this.projects.push(newProject);

    //add project to local storage
    this.setLocalStorage();
  }

  assignProjectID() {
    this.projectID++;
    return this.projectID;
  }

  assignTaskID() {
    this.taskID++;
    return this.taskID;
  }

  assignProjectColor() {
    const projectColor = this.colors[this.colorCounter];
    this.colorCounter++;
    if (this.colorCounter === 6) {
      this.colorCounter = 0;
    }
    return projectColor;
  }

  getProjectByID(projectID) {
    const project = this.projects.find((proj) => proj.id == projectID);
    return project;
  }

  getProjectIndex(project) {
    const index = this.projects.indexOf(project);
    return index;
  }

  changeActiveProject(newActiveProject) {
    this.activeProject = newActiveProject;
  }

  deleteProject(projectID) {
    const indexToDelete = this.getProjectIndex(this.getProjectByID(projectID));
    this.projects.splice(indexToDelete, 1);
    this.setLocalStorage();
    localStorage.removeItem(`tasks-${projectID}`);
  }
}
