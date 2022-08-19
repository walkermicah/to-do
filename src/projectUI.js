const projectBar = document.querySelector(".projects");
const projectsHeading = document.querySelector(".projects-heading");
const newProjectForm = document.querySelector(".new-project-form");
const newProjectName = document.querySelector(".new-project-form-input");

export class ProjectUI {
  //add button to project tab (to edit name or delete project)
  static appendBtn(el, classList, textContent) {
    const btn = el.appendChild(document.createElement("button"));
    btn.classList.add(`${classList}`);
    btn.textContent = `${textContent}`;
  }

  //display project tabs
  static loadProjects(directory) {
    this.clearProjects();
    directory.projects.forEach((project) => {
      const tab = projectBar.appendChild(document.createElement("div"));
      tab.classList.add("project-tab");
      tab.textContent = project.title;
      tab.setAttribute("data-id", project.id);

      //append edit button to project tab
      this.appendBtn(tab, "edit-project-form-btn", "Edit");

      //append delete button to project tab
      this.appendBtn(tab, "delete-project-btn", "Delete");
    });
  }

  //clear project tabs
  static clearProjects() {
    while (projectBar.childNodes.length > 1) {
      projectBar.removeChild(projectBar.lastChild);
    }
  }

  //display form to add a new project
  static showNewProjectForm() {
    projectsHeading.classList.add("hidden");
    newProjectForm.classList.remove("hidden");

    const input = document.querySelector(".new-project-form-input");
    input.focus();
  }

  //hide form to add new project
  static hideNewProjectForm() {
    projectsHeading.classList.remove("hidden");
    newProjectForm.classList.add("hidden");
  }

  //Add new project
  static createNewProject(directory) {
    const projectName = newProjectName.value;
    if (!projectName) {
      return;
    }
    if (projectName) {
      directory.addProject(projectName);
      this.loadProjects(directory);
      newProjectForm.reset();
      this.hideNewProjectForm();
    }
  }

  //show form to edit project name
  static showEditProjectForm(e, directory) {
    const projectTitle = directory.getProjectByID(
      e.target.parentNode.dataset.id
    ).title;

    const html = `<form action="#" class="edit-project-form">
      <input
        type="text"
        class="edit-project-form-input"
      />
      <button class="edit-project-name-btn">&plus;</button>
      <button class="edit-project-exit-btn">&#10005;</button>
    </form>`;
    e.target.parentNode.innerHTML = html;

    const input = document.querySelector(".edit-project-form-input");
    input.value = projectTitle;
    input.focus();
  }

  //edit project name
  static editProjectName(e, directory) {
    const input = document.querySelector(".edit-project-form-input");
    const newName = input.value;
    const id = e.target.closest(".project-tab").dataset.id;

    e.preventDefault();

    if (!newName) {
      return;
    }
    if (newName) {
      directory.editProjectName(id, newName);
      this.loadProjects(directory);
    }
  }

  //delete project
  static deleteProject(e, directory) {
    const id = e.target.parentNode.dataset.id;
    directory.deleteProject(id);
    this.loadProjects(directory);
  }
}

// export class TaskBarUI {}

// export class TaskUI {}
