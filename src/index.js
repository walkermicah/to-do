import "./style.css";
import { init, directory } from "./init.js";
import { ProjectUI } from "./projectUI.js";
import { TaskUI } from "./taskUI.js";

///////Initialize directory and add default project
init();

//for testing
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
    ProjectUI.createNewProject(e);
  }
  //exit form to create new project
  if (e.target.classList.contains("new-project-exit-btn")) {
    ProjectUI.hideNewProjectForm();
  }
  //show form to edit project name
  if (e.target.classList.contains("edit-project-form-btn")) {
    ProjectUI.showEditProjectForm(e);
  }
  //edit project name
  if (e.target.classList.contains("edit-project-name-btn")) {
    ProjectUI.editProjectName(e);
  }
  //exit form to rename project
  if (e.target.classList.contains("edit-project-exit-btn")) {
    ProjectUI.loadProjects();
  }
  //delete project
  if (e.target.classList.contains("delete-project-btn")) {
    ProjectUI.deleteProject(e);
  }
  //edit project color
  if (e.target.classList.contains("project-color")) {
    ProjectUI.changeProjectColor(e);
  }
  //display tasks when project tab is clicked
  if (
    e.target.closest(".project-tab") &&
    !e.target.classList.contains("delete-project-btn")
  ) {
    TaskUI.changeActiveProject(e);
  }

  /////TASK BAR
  //show form to add new task
  if (e.target.classList.contains("taskbar-form-btn")) {
    TaskUI.showNewTaskForm(e);
  }
  //submit new task
  if (e.target.classList.contains("new-task-submit-btn")) {
    TaskUI.submitNewTask(e);
  }
  //exit form to add new task
  if (e.target.classList.contains("new-task-exit-btn")) {
    TaskUI.exitNewTaskForm(e);
  }
  //select project from drop down
  if (e.target.closest("li")) {
    TaskUI.selectProject(e);
  }

  // TASK BUTTONS
  //mark task complete
  if (e.target.closest(".task-checkbox-input")) {
    TaskUI.markTaskComplete(e);
  }
  //mark task important
  if (e.target.closest(".star")) {
    TaskUI.markTaskImportant(e);
  }
  //edit task
  if (e.target.classList.contains("task-edit")) {
    TaskUI.showEditTaskForm(e);
  }
  //submit taks edit
  if (e.target.classList.contains("edit-task-btn")) {
    TaskUI.submitEditTask(e);
  }
  //exit edit form
  if (e.target.classList.contains("exit-edit-task-btn")) {
    TaskUI.exitEditTask();
  }
  //delete task
  if (e.target.classList.contains("task-delete")) {
    TaskUI.deleteTask(e);
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
/////////////////////////////////////////////////////////////
