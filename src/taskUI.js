import Edit from "./img/edit.svg";
import Delete from "./img/delete.svg";

const taskMenu = document.querySelector(".taskbar-menu");
const taskForm = document.querySelector(".taskbar-form");
const projectDropDown = document.querySelector(".slide");
const tasklist = document.querySelector(".tasklist");

export class TaskUI {
  static appendElement(parent, el, ...classList) {
    const element = parent.appendChild(document.createElement(`${el}`));
    element.classList.add(`${classList}`);
    return element;
  }

  ///////////// TASKBAR
  //show names of projects in drop-down menu
  static populateDropdown(directory) {
    directory.projects.forEach((proj) => {
      const li = projectDropDown.appendChild(document.createElement("li"));
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

  static submitNewTask(e) {
    e.preventDefault();
  }

  //exit new task form
  static exitNewTaskForm(e) {
    e.preventDefault();
    taskForm.reset();
    this.clearDropdown();
    taskForm.classList.add("hidden");
    taskMenu.classList.remove("hidden");
  }

  ///////////// TASK TABS
  //clear tasks
  static clearTasks() {
    while (tasklist.childNodes.length > 0) {
      tasklist.removeChild(tasklist.lastChild);
    }
  }

  //add checkbox to task
  static appendCheckbox(task) {
    const checkbox = task.appendChild(document.createElement("label"));
    checkbox.classList.add("task-checkbox");
    const input = checkbox.appendChild(document.createElement("input"));
    input.setAttribute("type", "checkbox");
    const checkmark = checkbox.appendChild(document.createElement("span"));
    checkmark.classList.add("checkmark");
  }

  //add star to task
  static appendStar(task) {
    const star = task.appendChild(document.createElement("input"));
    star.classList.add("star");
    star.setAttribute("type", "checkbox");
  }

  //add title to task
  static appendTitle(task, t) {
    const div = task.appendChild(document.createElement("div"));
    div.classList.add("task-title");
    div.textContent = t.title;
  }

  //add notes to task
  static appendNotes(task, t) {
    const div = task.appendChild(document.createElement("div"));
    div.classList.add("task-notes");
    div.textContent = t.notes;
  }

  //add date to task
  static appendDate(task, t) {
    const div = task.appendChild(document.createElement("div"));
    div.classList.add("task-date");
    div.textContent = t.date;
  }

  //append delete button to task
  static appendBtn(task, src, classList) {
    const btn = task.appendChild(document.createElement("button"));
    const img = btn.appendChild(document.createElement("img"));
    img.src = src;
    img.classList.add(`${classList}`, "icon-small");
  }

  //color code task
  static colorCode(task, project) {
    const projectColor = project.color;
    task.style.borderLeft = `10px solid ${projectColor}`;
  }

  //load tasklist
  static loadTasks(e, directory) {
    this.clearTasks();
    // get tasks for the project that was clicked
    const project = directory.getProjectByID(
      e.target.closest(".project-tab").dataset.id
    );
    const tasks = project.tasks;

    //display tasks
    tasks.forEach((t) => {
      //create div for each task
      const task = tasklist.appendChild(document.createElement("div"));
      task.classList.add("task");

      //add elements to each task
      this.appendCheckbox(task);
      this.appendStar(task);
      this.appendTitle(task, t);
      this.appendNotes(task, t);
      this.appendDate(task, t);
      this.appendBtn(task, Edit, "task-edit");
      this.appendBtn(task, Delete, "task-delete");
      this.colorCode(task, project);
    });
  }
}
