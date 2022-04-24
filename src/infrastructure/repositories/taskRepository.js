const tasks = [];

const add = ({ name, done }) => {
  tasks.push({ name, done });
};

export default { add }
