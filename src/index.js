import { initializeApp } from 'firebase/app';
import popUpLogin from './firebase/popUpLogin.js';
import handleAuth from './firebase/handleAuth';
import signOutUser from './firebase/signOutUser.js';
import { init, directory } from './init.js';
import { ProjectUI } from './projectUI.js';
import { TaskUI } from './taskUI.js';
import './style.css';

// Initialize firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAQK7HtMTalA-Af14wswAsu1zA74ITPepU',
  authDomain: 'todo-84334.firebaseapp.com',
  projectId: 'todo-84334',
  storageBucket: 'todo-84334.appspot.com',
  messagingSenderId: '972397081456',
  appId: '1:972397081456:web:9f0123054f5afe6a0615b5',
  measurementId: 'G-5PP0C5XYGL',
};

const app = initializeApp(firebaseConfig);

// Initialize auth observer
handleAuth();

/////// Initialize directory and add default project
init();

ProjectUI.loadProjects(directory);

/////// Event listeners
document.addEventListener('click', function (e) {
  ///// NAVIGATION
  if (e.target.classList.contains('sign-in')) {
    popUpLogin();
  }

  if (e.target.classList.contains('sign-out')) {
    signOutUser();
  }

  ///// PROJECTS BAR
  //show form to create new project
  if (e.target.classList.contains('new-project-btn')) {
    ProjectUI.showNewProjectForm(e);
  }
  //add new project to directory
  if (e.target.classList.contains('submit-new-project-btn')) {
    ProjectUI.createNewProject(e);
  }
  //exit form to create new project
  if (e.target.classList.contains('new-project-exit-btn')) {
    ProjectUI.hideNewProjectForm();
  }
  //show form to edit project name
  if (e.target.classList.contains('edit-project-form-btn')) {
    ProjectUI.clickEditProjectForm(e);
  }
  //edit project name
  if (e.target.classList.contains('edit-project-name-btn')) {
    ProjectUI.editProjectName(e);
  }
  //exit form to rename project
  if (e.target.classList.contains('edit-project-exit-btn')) {
    ProjectUI.loadProjects();
  }
  //delete project
  if (e.target.classList.contains('delete-project-btn')) {
    ProjectUI.deleteProject(e);
  }
  //edit project color
  if (e.target.classList.contains('project-color')) {
    ProjectUI.changeProjectColor(e);
  }
  //display tasks when project tab is clicked
  if (
    e.target.closest('.project-tab') &&
    !e.target.classList.contains('delete-project-btn')
  ) {
    TaskUI.changeActiveProject(e);
  }

  /////TASK BAR
  //show form to add new task
  if (e.target.classList.contains('taskbar-form-btn')) {
    TaskUI.showNewTaskForm(e);
  }
  //submit new task
  if (e.target.classList.contains('new-task-submit-btn')) {
    TaskUI.submitNewTask(e);
  }
  //exit form to add new task
  if (e.target.classList.contains('new-task-exit-btn')) {
    TaskUI.exitNewTaskForm(e);
  }
  //select project from drop down
  if (e.target.closest('li')) {
    TaskUI.selectProject(e);
  }

  // TASK BUTTONS
  //mark task complete
  if (e.target.closest('.task-checkbox-input')) {
    TaskUI.markTaskComplete(e);
  }
  //mark task important
  if (e.target.closest('.star')) {
    TaskUI.markTaskImportant(e);
  }
  //edit task
  if (e.target.classList.contains('task-edit')) {
    TaskUI.showEditTaskForm(e);
  }
  //submit taks edit
  if (e.target.classList.contains('edit-task-btn')) {
    TaskUI.submitEditTask(e);
  }
  //exit edit form
  if (e.target.classList.contains('exit-edit-task-btn')) {
    TaskUI.exitEditTask();
  }
  //delete task
  if (e.target.classList.contains('task-delete')) {
    TaskUI.deleteTask(e);
  }
});
