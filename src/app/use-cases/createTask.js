import { EmptyTaskException } from './exceptions/taskExceptions.js';

export class CreateTask {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  execute(task) {
    if (!task.name) {
      throw new EmptyTaskException();
    }

    this.taskRepository.add(task);
    return task;
  }
}
