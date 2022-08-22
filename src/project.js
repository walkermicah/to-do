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

  addTask(project, title, description, dueDate, notes, priority, complete) {
    const newTask = new Task(
      project,
      title,
      description,
      dueDate,
      notes,
      priority,
      complete
    );
    this.tasks.push(newTask);
  }

  deleteTask(taskID) {
    const indexToDelete = this.getTaskIndex(this.getTaskByID(taskID));
    this.tasks.splice(indexToDelete, 1);
  }

  // deleteTask(taskID) {
  //   const taskToDelete = this.getTaskByID(taskID);
  //   const index = this.tasks.indexOf(taskToDelete);
  //   this.tasks.splice(index, 1);
  // }
}
