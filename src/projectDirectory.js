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

  editProjectColor(projectID) {
    const project = this.getProjectByID(projectID);

    let newColor;

    if (project.color === "#00b4b4") {
      newColor = "#1af045";
    }
    if (project.color === "#1af045") {
      newColor = "#a51af0";
    }
    if (project.color === "#a51af0") {
      newColor = "#f01a9a";
    }
    if (project.color === "#f01a9a") {
      newColor = "#f0771a";
    }
    if (project.color === "#f0771a") {
      newColor = "#f0de1a";
    }
    if (project.color === "#f0de1a") {
      newColor = "#00b4b4";
    }

    project.color = newColor;
  }

  deleteProject(projectID) {
    const indexToDelete = this.getProjectIndex(this.getProjectByID(projectID));
    this.projects.splice(indexToDelete, 1);
  }
}
