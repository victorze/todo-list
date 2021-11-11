const { EmptyTaskNameException } = require('../exceptions/task-exceptions');

class CreateTask {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  execute(task, userId) {
    if (!task.name) {
      throw new EmptyTaskNameException();
    }

    this.taskRepository.save(task, userId);
    return task;
  }
}

module.exports = {
  CreateTask,
};
