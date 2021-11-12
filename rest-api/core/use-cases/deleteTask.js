const { TaskNotFoundException } = require('../exceptions/taskExceptions');

class DeleteTask {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  execute(taskId) {
    const task = this.taskRepository.get(taskId);

    if (!task) {
      throw new TaskNotFoundException();
    }

    return this.taskRepository.remove(taskId);
  }
}

module.exports = {
  DeleteTask,
};
