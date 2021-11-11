const { EmptyTaskNameException } = require('../exceptions/task-exceptions');

class CreateTask {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  execute(task, user) {
    if (!task.name) {
      throw new EmptyTaskNameException();
    }

    this.taskRepository.save(task, user);
    return task;
  }
}

module.exports = {
  CreateTask,
};
