// import { directory } from "./index.js";
import { directory } from "./init.js";
import { TaskUI } from "./taskUI.js";
import Edit from "./img/edit.svg";
import Delete from "./img/delete.svg";

const projectBar = document.querySelector(".projects");
const projectsMainTab = document.querySelector(".projects-main-tab");
const newProjectForm = document.querySelector(".new-project-form");
const newProjectName = document.querySelector(".new-project-form-input");

export class ProjectUI {
  //add button to project tab (to edit name or delete project)
  static appendBtn(el, imgSrc, classList) {
    const btn = el.appendChild(document.createElement("button"));
    const img = document.createElement("img");
    img.src = imgSrc;
    btn.appendChild(img);
    img.classList.add(`${classList}`, "icon-small");
  }

  //add color indicator to each project tab
  static addColorCoding(el, color) {
    color.classList.add("project-color");
    const projectColor = directory.getProjectByID(
      el.getAttribute("data-id")
    ).color;
    color.style.backgroundColor = `${projectColor}`;
  }

  //edit project color
  static changeProjectColor(e) {
    const projectID = e.target.closest(".project-tab").dataset.id;
    directory.changeProjectColor(projectID);
    this.loadProjects();
  }

  //display project tabs
  static loadProjects() {
    this.clearProjects();
    directory.projects.forEach((project) => {
      //create tab
      const tab = projectBar.appendChild(document.createElement("div"));
      tab.classList.add("project-tab");

      //add color indicator
      const color = tab.appendChild(document.createElement("div"));

      //add project title
      const projectName = tab.appendChild(document.createElement("div"));
      projectName.textContent = project.title;
      projectName.classList.add("project-name");
      tab.setAttribute("data-id", project.id);

      //add color coding
      this.addColorCoding(tab, color);

      //append edit button to project tab
      this.appendBtn(tab, Edit, "edit-project-form-btn");

      //append delete button to project tab
      this.appendBtn(tab, Delete, "delete-project-btn");
    });
  }

  //clear project tabs
  static clearProjects() {
    while (projectBar.childNodes.length > 0) {
      projectBar.removeChild(projectBar.lastChild);
    }
  }

  //display form to add a new project
  static showNewProjectForm(e) {
    e.preventDefault();
    projectsMainTab.classList.add("hidden");
    newProjectForm.classList.remove("hidden");
    newProjectName.focus();
  }

  //hide form to add new project
  static hideNewProjectForm() {
    projectsMainTab.classList.remove("hidden");
    newProjectForm.classList.add("hidden");
  }

  //Add new project
  static createNewProject(e) {
    e.preventDefault();
    const projectName = newProjectName.value;
    if (!projectName) {
      return;
    }
    if (projectName) {
      directory.addProject(projectName);
      directory.changeActiveProject(
        directory.projects[directory.projects.length - 1]
      );
      this.loadProjects();
      TaskUI.clearTasks();
      newProjectForm.reset();
      this.hideNewProjectForm();
    }
  }

  //show form to edit project name
  static showEditProjectForm(e) {
    TaskUI.changeActiveProject(e);

    const projectTitle = directory.activeProject.title;
    const html = `<form action="#" class="edit-project-form">
      <input
        type="text"
        class="edit-project-form-input"
      />
      <button class="edit-project-name-btn">&plus;</button>
      <button class="edit-project-exit-btn">&#10005;</button>
    </form>`;
    e.target.closest(".project-tab").innerHTML = html;

    const input = document.querySelector(".edit-project-form-input");
    input.value = projectTitle;
    input.focus();
  }

  //edit project name
  static editProjectName(e) {
    const input = document.querySelector(".edit-project-form-input");
    const newName = input.value;

    e.preventDefault();

    if (!newName) {
      return;
    }
    if (newName) {
      directory.activeProject.editTitle(newName);
      this.loadProjects();
    }
  }

  //delete project
  static deleteProject(e) {
    const id = e.target.closest(".project-tab").dataset.id;
    directory.deleteProject(id);
    directory.changeActiveProject(null);
    this.loadProjects();

    TaskUI.clearTasks();
  }
}
