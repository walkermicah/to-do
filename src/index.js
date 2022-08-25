import "./style.css";
import { ProjectDirectory } from "./projectDirectory.js";
import { ProjectUI } from "./projectUI.js";
import { TaskUI } from "./taskUI.js";

///////INITIALIZE DIRECTORY AND DEFAULT PROJECT
const directory = new ProjectDirectory();
// directory.addProject("My Project");
directory.addProject("Project 1");
directory.addProject("Project 2");
directory.addProject("Project 3");
directory.addProject("Project 4");
directory.addProject("Project 5");
directory.addProject("Project 6");
directory.getProjectByID(1).addTask("Task 1", "Note 1", "09/23/22");
directory.getProjectByID(1).addTask("Task 2", "Note 2", "09/25/22");
directory.getProjectByID(2).addTask("New Task", "Notes", "10/30/22");
directory.getProjectByID(3).addTask("Task A", "Note A...", "01/01/23");
directory.getProjectByID(3).addTask("Task B", "Note B...", "01/22/23");
directory.getProjectByID(4).addTask("Task B", "Note B...", "01/22/23");
directory.getProjectByID(5).addTask("Task B", "Note B...", "01/22/23");
directory.getProjectByID(6).addTask("Task B", "Note B...", "01/22/23");
ProjectUI.loadProjects(directory);

///////EVENT LISTENERS
document.addEventListener("click", function (e) {
  /////PROJECTS BAR
  //show form to create new project
  if (e.target.classList.contains("new-project-btn")) {
    ProjectUI.showNewProjectForm(e);
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
  //edit project color
  if (e.target.classList.contains("project-color")) {
    ProjectUI.changeProjectColor(e, directory);
  }
  //display tasks when project tab is clicked
  if (e.target.closest(".project-tab")) {
    TaskUI.loadTasks(e, directory);
  }

  /////TASK BAR
  //show form to add new task
  if (e.target.classList.contains("taskbar-form-btn")) {
    TaskUI.showNewTaskForm(directory);
  }
  //submit new task
  if (e.target.classList.contains("new-task-submit-btn")) {
    TaskUI.submitNewTask(e);
  }
  //exit form to add new task
  if (e.target.classList.contains("new-task-exit-btn")) {
    TaskUI.exitNewTaskForm(e);
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
