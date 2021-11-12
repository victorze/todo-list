const { Task } = require('../../core/entities/task');
const { EmptyTaskException } = require('../../core/exceptions/taskExceptions');
const { CreateTask } = require('../../core/use-cases/createTask');
const taskRepository = require('../../services/repositories/taskRepository');
const { BadRequestError } = require('../httpErrors');

const store = (req, res) => {
  const { name } = req.body;
  const createTask = new CreateTask(taskRepository);
  let task;

  try {
    task = createTask.execute(new Task(name));
  } catch (e) {
    if (e instanceof EmptyTaskException) {
      throw new BadRequestError();
    }
  }

  res.status(201).json(task);
};

module.exports = {
  store,
};
