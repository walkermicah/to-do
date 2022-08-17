import { Project } from "./project.js";

export class ProjectDirectory {
  projects = [];

  addProject(title) {
    const newProject = new Project(title);
    this.projects.push(newProject);
  }

  getProject(projectID) {
    const project = this.projects.find((proj) => proj.id === projectID);
    return project;
  }

  deleteProject(projectID) {
    const projectToDelete = this.getProject(projectID);
    const index = this.projects.indexOf(projectToDelete);
    this.projects.splice(index, 1);
  }
}
