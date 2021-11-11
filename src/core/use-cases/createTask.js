const { EmptyTaskNameException } = require('../exceptions/taskExceptions');

class CreateTask {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  execute(task) {
    if (!task.name) {
      throw new EmptyTaskNameException();
    }

    this.taskRepository.add(task);
    return task;
  }
}

module.exports = {
  CreateTask,
};
