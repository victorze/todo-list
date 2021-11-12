const { EmptyTaskException } = require('../exceptions/taskExceptions');

class CreateTask {
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

module.exports = {
  CreateTask,
};
