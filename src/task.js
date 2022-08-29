import { directory } from "./init.js";

export class Task {
  constructor(title, notes, date) {
    this.id = directory.activeProject.assignTaskID();
    this.title = title;
    this.notes = notes;
    this.date = date;
  }

  complete = false;
  important = false;

  // edit title
  editTitle(newTitle) {
    this.title = newTitle;
  }

  //edit notes
  editNotes(newNotes) {
    this.notes = newNotes;
  }

  //edit date
  editDate(newDate) {
    this.date = newDate;
  }

  toggleComplete() {
    this.complete = this.complete !== true;
  }

  toggleImportant() {
    this.important = this.important !== true;
  }
}
