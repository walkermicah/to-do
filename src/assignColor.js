const colors = [
  "#00b4b4",
  "#1af045",
  "#a51af0",
  "#f01a9a",
  "#f0771a",
  "#f0de1a",
];
let counter = 0;

const assignProjectColor = () => {
  const projectColor = colors[counter];
  counter++;
  if (counter === 6) {
    counter = 0;
  }
  return projectColor;
};

export { assignProjectColor };
