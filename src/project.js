import { Task } from "./task.js";
import { assignProjectID } from "./assignID.js";
import { assignProjectColor } from "./assignColor.js";

export class Project {
  constructor(title) {
    this.id = assignProjectID();
    this.color = assignProjectColor();
    this.title = title;
  }

  tasks = [];

  getTaskByID(taskID) {
    const task = this.tasks.find((t) => t.id === taskID);
    return task;
  }

  getTaskIndex(task) {
    const index = this.tasks.indexOf(task);
    return index;
  }

  addTask(title, notes, date) {
    const newTask = new Task(title, notes, date);
    this.tasks.push(newTask);
  }

  deleteTask(taskID) {
    const indexToDelete = this.getTaskIndex(this.getTaskByID(taskID));
    this.tasks.splice(indexToDelete, 1);
  }
}
