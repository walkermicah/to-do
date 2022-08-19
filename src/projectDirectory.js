import { Project } from "./project.js";

export class ProjectDirectory {
  projects = [];

  addProject(title) {
    const newProject = new Project(title);
    this.projects.push(newProject);
  }

  getProjectByID(projectID) {
    const project = this.projects.find((proj) => proj.id == projectID);
    return project;
  }

  getProjectIndex(project) {
    const index = this.projects.indexOf(project);
    return index;
  }

  editProjectName(projectID, newTitle) {
    const indexToEdit = this.getProjectIndex(this.getProjectByID(projectID));
    this.projects[indexToEdit].title = newTitle;
  }

  deleteProject(projectID) {
    const indexToDelete = this.getProjectIndex(this.getProjectByID(projectID));
    this.projects.splice(indexToDelete, 1);
  }
}
