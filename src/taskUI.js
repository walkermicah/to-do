import Edit from "./img/edit.svg";
import Delete from "./img/delete.svg";

const taskMenu = document.querySelector(".taskbar-menu");
const taskForm = document.querySelector(".taskbar-form");
const tasklist = document.querySelector(".tasklist");
const taskName = document.querySelector(".task-name-input");

let activeProject;

export class TaskUI {
  static appendElement(parent, el, ...classList) {
    const element = parent.appendChild(document.createElement(`${el}`));
    element.classList.add(`${classList}`);
    return element;
  }

  ///////////// TASK TABS
  //clear tasks
  static clearTasks() {
    while (tasklist.childNodes.length > 0) {
      tasklist.removeChild(tasklist.lastChild);
    }
  }

  //add checkbox to task
  static appendCheckbox(el) {
    const checkbox = el.appendChild(document.createElement("label"));
    checkbox.classList.add("task-checkbox");
    const input = checkbox.appendChild(document.createElement("input"));
    input.setAttribute("type", "checkbox");
    const checkmark = checkbox.appendChild(document.createElement("span"));
    checkmark.classList.add("checkmark");
  }

  //add star to task
  static appendStar(el) {
    const star = el.appendChild(document.createElement("input"));
    star.classList.add("star");
    star.setAttribute("type", "checkbox");
  }

  //add title to task
  static appendTitle(el, title) {
    const div = el.appendChild(document.createElement("div"));
    div.classList.add("task-title");
    div.textContent = title;
  }

  //add notes to task
  static appendNotes(el, notes) {
    const div = el.appendChild(document.createElement("div"));
    div.classList.add("task-notes");
    div.textContent = notes;
  }

  //add date to task
  static appendDate(el, date) {
    const div = el.appendChild(document.createElement("div"));
    div.classList.add("task-date");
    div.textContent = date;
  }

  //append delete button to task
  static appendBtn(el, src, classList) {
    const btn = el.appendChild(document.createElement("button"));
    const img = btn.appendChild(document.createElement("img"));
    img.src = src;
    img.classList.add(`${classList}`, "icon-small");
  }

  //color code task
  static colorCode(el, project) {
    const projectColor = project.color;
    el.style.borderLeft = `10px solid ${projectColor}`;
  }

  //load tasklist
  static loadTasks(e, directory) {
    this.clearTasks();
    // get tasks for the project that was clicked
    const project = directory.getProjectByID(
      e.target.closest(".project-tab").dataset.id
    );
    const tasks = project.tasks;
    activeProject = project;

    //display tasks
    tasks.forEach((t) => {
      //create div for each task
      const task = tasklist.appendChild(document.createElement("div"));
      task.classList.add("task");

      //add elements to each task
      this.appendCheckbox(task);
      this.appendStar(task);
      this.appendTitle(task, t.title);
      this.appendNotes(task, t.notes);
      this.appendDate(task, t.date);
      this.appendBtn(task, Edit, "task-edit");
      this.appendBtn(task, Delete, "task-delete");
      this.colorCode(task, project);
    });
  }

  ///////////// TASKBAR
  //show names of projects in drop-down menu
  // static populateDropdown(directory) {
  //   directory.projects.forEach((proj) => {
  //     const li = projectDropDown.appendChild(document.createElement("li"));
  //     li.setAttribute("data-id", proj.id);
  //     const colorIndicator = li.appendChild(document.createElement("div"));
  //     colorIndicator.classList.add("dropdown-color");
  //     colorIndicator.style.backgroundColor = proj.color;
  //     const link = li.appendChild(document.createElement("a"));
  //     link.href = "#";
  //     link.textContent = proj.title;
  //   });
  // }

  //clear projects from drop down when form exits
  // static clearDropdown() {
  //   const menu = document.querySelector(".slide");
  //   while (menu.firstChild) {
  //     menu.removeChild(menu.lastChild);
  //   }
  // }

  //allow user to select project from drop-down
  // static selectProject(e, directory) {
  //   const project = directory.getProjectByID(e.target.closest("li").dataset.id);
  //   dropDownLabel.setAttribute("data-id", project.id);
  //   dropDownLabel.textContent = project.title;
  // }

  //show form to add new task
  static showNewTaskForm(directory, e) {
    e.preventDefault();
    taskMenu.classList.add("hidden");
    taskForm.classList.remove("hidden");
    taskName.focus();
    // this.populateDropdown(directory);
  }

  //create new task
  static submitNewTask(e, directory) {
    e.preventDefault();
    const title = taskName.value;
    const notes = document.querySelector(".task-notes-input").value;
    const date = document.querySelector(".task-date-input").value;

    if (!activeProject) return;
    if (!title) return;

    activeProject.addTask(`${title}`, `${notes}`, `${date}`);

    //add task to display
    const task = tasklist.appendChild(document.createElement("div"));
    task.classList.add("task");

    //add elements to each task
    this.appendCheckbox(task);
    this.appendStar(task);
    this.appendTitle(task, title);
    this.appendNotes(task, notes);
    this.appendDate(task, date);
    this.appendBtn(task, Edit, "task-edit");
    this.appendBtn(task, Delete, "task-delete");
    this.colorCode(task, activeProject);

    taskForm.reset();
    taskName.focus();
  }

  //exit new task form
  static exitNewTaskForm(e) {
    e.preventDefault();
    taskForm.reset();
    this.clearDropdown();
    taskForm.classList.add("hidden");
    taskMenu.classList.remove("hidden");
  }
}
