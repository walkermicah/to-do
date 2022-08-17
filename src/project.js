import { Task } from "./task.js";
import { assignProjectID } from "./assignID.js";

export class Project {
  constructor(title) {
    this.id = assignProjectID();
    this.title = title;
  }

  tasks = [];

  editTitle(newTitle) {
    this.title = newTitle;
    return this.title;
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
    const taskToDelete = this.tasks.find((task) => task.id === taskID);
    const index = this.tasks.indexOf(taskToDelete);
    this.tasks.splice(index, 1);
  }
}
