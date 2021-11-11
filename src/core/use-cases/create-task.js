const { EmptyTaskNameException } = require('../exceptions/task-exceptions');

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
