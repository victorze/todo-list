import { Task } from '../../app/domain/task.js';
import { EmptyTaskException } from '../../app/use-cases/exceptions/taskExceptions.js';
import { CreateTask } from '../../app/use-cases/createTask.js';
import taskRepository from '../../infrastructure/repositories/taskRepository.js';
import { BadRequestError } from '../httpErrors.js';

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

export default { store }
