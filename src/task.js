import { assignTaskID } from "./assignID.js";

export class Task {
  constructor(title, description, dueDate, notes, priority, complete) {
    this.id = assignTaskID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.notes = notes;
    this.priority = priority;
    this.complete = complete;
  }
}
