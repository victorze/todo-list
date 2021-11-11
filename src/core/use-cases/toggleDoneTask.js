class ToggleDoneTask {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  execute(taskId) {
    const task = this.taskRepository.get(taskId);
    task.done = !task.done;
    this.taskRepository.update(task);
    return task;
  }
}

module.exports = {
  ToggleDoneTask,
};
