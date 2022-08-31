// import { directory } from "./index.js";
import { directory } from "./init.js";
import Edit from "./img/edit-black.svg";
import Delete from "./img/delete-black.svg";

const taskMenu = document.querySelector(".taskbar-menu");
const taskForm = document.querySelector(".taskbar-form");
const tasklist = document.querySelector(".tasklist");
const taskName = document.querySelector(".task-name-input");

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
  static appendCheckbox(el, status) {
    const checkbox = el.appendChild(document.createElement("label"));
    checkbox.classList.add("task-checkbox");
    const input = checkbox.appendChild(document.createElement("input"));
    input.setAttribute("type", "checkbox");
    input.classList.add("task-checkbox-input");
    const checkmark = checkbox.appendChild(document.createElement("span"));
    checkmark.classList.add("checkmark");

    if (status) input.checked = true;
  }

  //add star to task
  static appendStar(el, status) {
    const star = el.appendChild(document.createElement("input"));
    star.classList.add("star");
    star.setAttribute("type", "checkbox");

    if (status) star.checked = true;
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

  //display tasks
  static displayTasks(project) {
    this.clearTasks();
    const tasks = project.tasks;
    tasks.forEach((t) => {
      //create div for each task
      const task = tasklist.appendChild(document.createElement("div"));
      task.classList.add("task");
      task.setAttribute("data-id", t.id);
      const taskInfo = task.appendChild(document.createElement("div"));
      taskInfo.classList.add("task-info");

      //add elements to each task
      this.appendCheckbox(taskInfo, t.complete);
      this.appendStar(taskInfo, t.important);
      this.appendTitle(taskInfo, t.title);
      this.appendNotes(taskInfo, t.notes);
      this.appendDate(taskInfo, t.date);
      this.appendBtn(taskInfo, Edit, "task-edit");
      this.appendBtn(taskInfo, Delete, "task-delete");
      this.colorCode(task, project);
    });
  }

  //sets active project when a tab is clicked, then display tasks for that project
  static changeActiveProject(e) {
    // get tasks for the project that was clicked
    const project = directory.getProjectByID(
      e.target.closest(".project-tab").dataset.id
    );
    directory.changeActiveProject(project);

    //display tasks
    this.displayTasks(directory.activeProject);
  }

  // TASK BUTTONS
  static markTaskComplete(e) {
    const task = directory.activeProject.getTaskByID(
      e.target.closest(".task").dataset.id
    );
    task.toggleComplete();
  }

  static markTaskImportant(e) {
    const task = directory.activeProject.getTaskByID(
      e.target.closest(".task").dataset.id
    );
    task.toggleImportant();
  }

  //close edit form on tasks not clicked
  static closeEditTaskForm(e) {
    const tasks = document.querySelectorAll(".task");
    const inactiveTasks = [];

    tasks.forEach((task) => {
      if (task.dataset.id !== e.target.closest(".task").dataset.id) {
        inactiveTasks.push(task);
      }
    });

    inactiveTasks.forEach((task) => {
      task.innerHTML = `<div class="task-info">
      <label class="task-checkbox"
        ><input type="checkbox" class="task-checkbox-input" /><span
          class="checkmark"
        ></span></label
      ><input class="star" type="checkbox" />
      <div class="task-title">${
        directory.activeProject.getTaskByID(task.dataset.id).title
      }</div>
      <div class="task-notes">${
        directory.activeProject.getTaskByID(task.dataset.id).notes
      }</div>
      <div class="task-date">${
        directory.activeProject.getTaskByID(task.dataset.id).date
      }</div>
      <button>
        <img
          src="${Edit}"
          class="task-edit icon-small"
        /></button
      ><button>
        <img
          src="${Delete}"
          class="task-delete icon-small"
        />
      </button>
    </div>`;
    });
  }

  //when user clicks to edit a task, form opens on the task they clicked. if another task has a form open, close it.
  static showEditTaskForm(e) {
    this.closeEditTaskForm(e);

    const activeTask = e.target.closest(".task");
    activeTask.innerHTML = `<form action="#" class="task-edit-form">
    <input type="text" class="task-edit-title" placeholder="Task name" />
    <input type="text" class="task-edit-notes" placeholder="Notes" />
    <input type="date" name="date" class="task-edit-date" id="date" />
    <button class="edit-task-btn">&plus;</button>
    <button class="exit-edit-task-btn">&#10005;</button>
  </form>`;

    const titleInput = document.querySelector(".task-edit-title");
    titleInput.value = directory.activeProject.getTaskByID(
      activeTask.dataset.id
    ).title;
    titleInput.focus();
    const notesInput = document.querySelector(".task-edit-notes");
    notesInput.value = directory.activeProject.getTaskByID(
      activeTask.dataset.id
    ).notes;
  }

  static submitEditTask(e) {
    e.preventDefault();
    const task = directory.activeProject.getTaskByID(
      e.target.closest(".task").dataset.id
    );
    const title = document.querySelector(".task-edit-title").value;
    const notes = document.querySelector(".task-edit-notes").value;

    if (!title) return;

    task.editTitle(title);
    task.editNotes(notes);
    //edit date here
    this.displayTasks(directory.activeProject);
  }

  static exitEditTask() {
    this.displayTasks(directory.activeProject);
  }

  static deleteTask(e) {
    const taskID = e.target.closest(".task").dataset.id;
    directory.activeProject.deleteTask(taskID);
    this.displayTasks(directory.activeProject);
  }

  ///////////// TASKBAR
  //show form to add new task
  static showNewTaskForm(e) {
    e.preventDefault();
    taskMenu.classList.add("hidden");
    taskForm.classList.remove("hidden");
    taskName.focus();
  }

  //create new task
  static submitNewTask(e) {
    e.preventDefault();

    //create task
    const title = taskName.value;
    const notes = document.querySelector(".task-notes-input").value;
    const date = document.querySelector(".task-date-input").value;

    if (!directory.activeProject) return;
    if (!title) return;

    directory.activeProject.addTask(`${title}`, `${notes}`, `${date}`);

    //add task to display
    this.displayTasks(directory.activeProject);

    //reset form
    taskForm.reset();
    taskName.focus();
  }

  //exit new task form
  static exitNewTaskForm(e) {
    e.preventDefault();
    taskForm.reset();
    taskForm.classList.add("hidden");
    taskMenu.classList.remove("hidden");
  }
}
