const taskMenu = document.querySelector(".taskbar-menu");
const taskForm = document.querySelector(".taskbar-form");
const taskNameInput = document.querySelector(".task-name-input");

export class TaskUI {
  //show form to add new task
  static showNewTaskForm() {
    taskMenu.classList.add("hidden");
    taskForm.classList.remove("hidden");
    taskNameInput.focus();
  }

  //exit new task form
  static exitNewTaskForm() {
    taskMenu.classList.remove("hidden");
    taskForm.classList.add("hidden");
  }
}
