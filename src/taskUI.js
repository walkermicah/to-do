const taskMenu = document.querySelector(".taskbar-menu");
const taskForm = document.querySelector(".taskbar-form");
const taskNameInput = document.querySelector(".task-name-input");

export class TaskUI {
  //show names of projects in drop-down menu
  static populateDropdown(directory) {
    directory.projects.forEach((proj) => {
      const menu = document.querySelector(".slide");
      const li = menu.appendChild(document.createElement("li"));
      const colorIndicator = li.appendChild(document.createElement("div"));
      colorIndicator.classList.add("project-color");
      colorIndicator.style.backgroundColor = proj.color;
      const link = li.appendChild(document.createElement("a"));
      link.href = "#";
      link.textContent = proj.title;
    });
  }

  //clear projects from drop down when form exits
  static clearDropdown() {
    const menu = document.querySelector(".slide");
    while (menu.firstChild) {
      menu.removeChild(menu.lastChild);
    }
  }

  //show form to add new task
  static showNewTaskForm(directory) {
    taskMenu.classList.add("hidden");
    taskForm.classList.remove("hidden");
    this.populateDropdown(directory);
  }

  //exit new task form
  static exitNewTaskForm() {
    taskMenu.classList.remove("hidden");
    taskForm.reset();
    this.clearDropdown();
    taskForm.classList.add("hidden");
  }
}
