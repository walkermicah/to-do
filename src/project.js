import { Task } from "./task.js";
import { directory } from "./init.js";

export class Project {
  constructor(title) {
    this.id = directory.assignProjectID();
    this.color = directory.assignProjectColor();
    this.title = title;
  }

  tasks = [];
  taskID = 0;

  editTitle(newTitle) {
    this.title = newTitle;
  }

  addTask(title, notes, date) {
    const newTask = new Task(title, notes, date);
    this.tasks.push(newTask);
  }

  assignTaskID() {
    this.taskID++;
    return this.taskID;
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
  }
}
