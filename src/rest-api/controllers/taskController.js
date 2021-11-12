const { Task } = require('../../app/domain/task');
const {
  EmptyTaskException,
} = require('../../app/use-cases/exceptions/taskExceptions');
const { CreateTask } = require('../../app/use-cases/createTask');
const taskRepository = require('../../infrastructure/repositories/taskRepository');
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
