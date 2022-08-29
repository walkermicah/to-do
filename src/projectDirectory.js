import { directory } from "./init.js";
import { Project } from "./project.js";

export class ProjectDirectory {
  projects = [];
  projectID = 0;
  activeProject;
  colors = ["#00b4b4", "#1af045", "#a51af0", "#f01a9a", "#f0771a", "#f0de1a"];
  colorCounter = 0;

  addProject(title) {
    const newProject = new Project(title);
    this.projects.push(newProject);
  }

  assignProjectID() {
    this.projectID++;
    return this.projectID;
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

  changeProjectColor(projectID) {
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

  changeActiveProject(newActiveProject) {
    this.activeProject = newActiveProject;
  }

  deleteProject(projectID) {
    const indexToDelete = this.getProjectIndex(this.getProjectByID(projectID));
    this.projects.splice(indexToDelete, 1);
  }
}

// export class ProjectDirectory {
//   projects = [];
//   activeProject;

//   addProject(title) {
//     const newProject = new Project(title);
//     this.projects.push(newProject);
//   }

//   getProjectByID(projectID) {
//     const project = this.projects.find((proj) => proj.id == projectID);
//     return project;
//   }

//   getProjectIndex(project) {
//     const index = this.projects.indexOf(project);
//     return index;
//   }

//   editProjectName(projectID, newTitle) {
//     const indexToEdit = this.getProjectIndex(this.getProjectByID(projectID));
//     this.projects[indexToEdit].title = newTitle;
//   }

//   editProjectColor(projectID) {
//     const project = this.getProjectByID(projectID);

//     let newColor;

//     if (project.color === "#00b4b4") {
//       newColor = "#1af045";
//     }
//     if (project.color === "#1af045") {
//       newColor = "#a51af0";
//     }
//     if (project.color === "#a51af0") {
//       newColor = "#f01a9a";
//     }
//     if (project.color === "#f01a9a") {
//       newColor = "#f0771a";
//     }
//     if (project.color === "#f0771a") {
//       newColor = "#f0de1a";
//     }
//     if (project.color === "#f0de1a") {
//       newColor = "#00b4b4";
//     }

//     project.color = newColor;
//   }

//   deleteProject(projectID) {
//     const indexToDelete = this.getProjectIndex(this.getProjectByID(projectID));
//     this.projects.splice(indexToDelete, 1);
//   }
// }
