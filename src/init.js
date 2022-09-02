import { ProjectDirectory } from "./projectDirectory.js";
import { TaskUI } from "./taskUI.js";

let directory = new ProjectDirectory();

const init = function () {
  //if no local storage, add default project and set it as active project
  if (!directory.getLocalStorage()) {
    directory.addProject("My Project", "#00b4b4");
    directory.activeProject = directory.projects[0];
  } else {
    //if there is local storage: get projects
    directory.getLocalStorage().forEach((proj) => {
      directory.addProject(proj.title, proj.color);
    });

    //get tasks for each project from local storage
    directory.projects.forEach((proj) => {
      if (proj.getLocalStorage()) {
        proj.getLocalStorage().forEach((task) => {
          proj.addTask(
            task.title,
            task.notes,
            task.date,
            task.complete,
            task.important
          );
        });
      }
    });
  }
  return directory;
};

export { directory, init };
