import { ProjectDirectory } from "./projectDirectory.js";

const directory = new ProjectDirectory();

const init = function () {
  directory.addProject("My Project");
  directory.activeProject = directory.projects[0];
  return directory;
};

export { directory, init };
