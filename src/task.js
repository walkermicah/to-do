import { assignTaskID, assignProjectID } from "./assignID";

export class Task {
  constructor(project, title, description, dueDate, notes, priority, complete) {
    this.id = assignTaskID();
    this.project = project;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.notes = notes;
    this.priority = priority;
    this.complete = complete;
  }

  editProject(newProject) {
    this.project = newProject;
    return this.project;
  }

  editTitle(newTitle) {
    this.title = newTitle;
    return this.title;
  }

  editDescription(newDescription) {
    this.description = newDescription;
    return this.description;
  }

  editDueDate(newDate) {
    this.dueDate = newDate;
    return this.dueDate;
  }

  editNotes(newNote) {
    this.notes = newNote;
    return this.notes;
  }

  editStatus(newStatus) {
    this.complete = newStatus;
    return this.complete;
  }

  editPriority(newPriority) {
    this.priority = newPriority;
    return this.priority;
  }
}
