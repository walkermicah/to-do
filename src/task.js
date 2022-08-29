import { assignTaskID } from "./assignID.js";

export class Task {
  constructor(title, notes, date) {
    this.id = assignTaskID();
    this.title = title;
    this.notes = notes;
    this.date = date;
  }

  complete = false;
  important = false;

  toggleComplete(task) {
    task.complete = task.complete !== true;
  }

  toggleImportant(task) {
    task.important = task.important !== true;
  }
}
