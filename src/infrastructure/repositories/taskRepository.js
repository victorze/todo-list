const tasks = [];

const add = ({ name, done }) => {
  tasks.push({ name, done });
};

module.exports = {
  add,
};
