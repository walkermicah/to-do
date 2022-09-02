import { directory } from "./init.js";

export class Task {
  constructor(title, notes, date, complete, important) {
    this.id = directory.assignTaskID();
    this.title = title;
    this.notes = notes;
    this.date = date;
    this.complete = complete;
    this.important = important;
  }

  // edit title
  editTitle(newTitle) {
    this.title = newTitle;
    directory.activeProject.setLocalStorage();
  }

  //edit notes
  editNotes(newNotes) {
    this.notes = newNotes;
    directory.activeProject.setLocalStorage();
  }

  //edit date
  editDate(newDate) {
    this.date = newDate;
    directory.activeProject.setLocalStorage();
  }

  toggleComplete() {
    this.complete = this.complete !== true;
    directory.activeProject.setLocalStorage();
  }

  toggleImportant() {
    this.important = this.important !== true;
    directory.activeProject.setLocalStorage();
  }
}
