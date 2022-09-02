import { Task } from "./task.js";
import { directory } from "./init.js";

export class Project {
  constructor(title, color) {
    this.id = directory.assignProjectID();
    this.title = title;
    this.color = color;
  }

  tasks = [];

  setLocalStorage() {
    localStorage.setItem(`tasks-${this.id}`, JSON.stringify(this.tasks));
  }

  getLocalStorage() {
    const data = JSON.parse(localStorage.getItem(`tasks-${this.id}`));
    return data;
  }

  editTitle(newTitle) {
    this.title = newTitle;
    directory.setLocalStorage();
  }

  changeProjectColor() {
    let newColor;

    if (this.color === "#00b4b4") {
      newColor = "#1af045";
    }
    if (this.color === "#1af045") {
      newColor = "#a51af0";
    }
    if (this.color === "#a51af0") {
      newColor = "#f01a9a";
    }
    if (this.color === "#f01a9a") {
      newColor = "#f0771a";
    }
    if (this.color === "#f0771a") {
      newColor = "#f0de1a";
    }
    if (this.color === "#f0de1a") {
      newColor = "#00b4b4";
    }

    this.color = newColor;
    directory.setLocalStorage();
  }

  addTask(title, notes, date, complete, important) {
    const newTask = new Task(title, notes, date, complete, important);
    this.tasks.push(newTask);

    //add task to local storage
    this.setLocalStorage();
  }

  getTaskByID(taskID) {
    const task = this.tasks.find((t) => t.id == taskID);
    return task;
  }

  getTaskIndex(task) {
    const index = this.tasks.indexOf(task);
    return index;
  }

  deleteTask(taskID) {
    const indexToDelete = this.getTaskIndex(this.getTaskByID(taskID));
    this.tasks.splice(indexToDelete, 1);
    this.setLocalStorage();
  }
}
