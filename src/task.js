import { assignTaskID } from "./assignID.js";

export class Task {
  constructor(title, notes, date) {
    this.id = assignTaskID();
    this.title = title;
    this.notes = notes;
    this.date = date;
  }

  important = false;
  complete = false;
}
