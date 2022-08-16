let taskID = 0;
let projectID = 0;

const assignTaskID = () => {
  taskID++;
  return taskID;
};

const assignProjectID = () => {
  projectID++;
  return projectID;
};

export { assignTaskID, assignProjectID };
