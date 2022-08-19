import "./style.css";
import { ProjectDirectory } from "./projectDirectory.js";
import { ProjectUI } from "./projectUI.js";

///////INITIALIZE DIRECTORY AND DEFAULT PROJECT
const directory = new ProjectDirectory();
directory.addProject("My Project");
ProjectUI.loadProjects(directory);

///////EVENT LISTENERS
document.addEventListener("click", function (e) {
  /////PROJECTS BAR
  //show form to create new project
  if (e.target.classList.contains("new-project-btn")) {
    ProjectUI.showNewProjectForm();
  }
  //add new project to directory
  if (e.target.classList.contains("submit-new-project-btn")) {
    ProjectUI.createNewProject(directory);
  }
  //exit form to create new project
  if (e.target.classList.contains("new-project-exit-btn")) {
    ProjectUI.hideNewProjectForm();
  }
  //show form to edit project name
  if (e.target.classList.contains("edit-project-form-btn")) {
    ProjectUI.showEditProjectForm(e, directory);
  }
  //edit project name
  if (e.target.classList.contains("edit-project-name-btn")) {
    ProjectUI.editProjectName(e, directory);
  }
  //exit form to rename project
  if (e.target.classList.contains("edit-project-exit-btn")) {
    ProjectUI.loadProjects(directory);
  }
  //delete project
  if (e.target.classList.contains("delete-project-btn")) {
    ProjectUI.deleteProject(e, directory);
  }
});

/////////////////////////////////////////////////////////////
//ADD PROJECT
// directory.addProject("Project 1");

//DELETE PROJECT
// directory.deleteProject(1);

//ADD TASK
// directory.getProjectByID(1).addTask(1, 1, 1, 1, 1, 1, 1);

//DELETE TASK
// directory.getProjectByID(1).deleteTask(1);

//ACCESS PROJECT PROPERTIES
// directory.getProjectByID(1).title = "New Title";

//ACCESS TASK PROPERTIES
// directory.getProjectByID(1).getTaskByID(1).title = "New Title";

// console.log(directory);
/////////////////////////////////////////////////////////////
