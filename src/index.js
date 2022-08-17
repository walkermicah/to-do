import "./style.css";
import { ProjectDirectory } from "./projectDirectory.js";

const directory = new ProjectDirectory();

//ADD PROJECT
directory.addProject("Project 1");
//ADD TASK
directory.getProject(1).addTask(1, 1, 1, 1, 1, 1, 1);
//DELETE PROJECT
directory.deleteProject(1);
