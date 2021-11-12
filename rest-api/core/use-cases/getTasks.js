class GetTasks {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  execute() {
    return this.taskRepository.getAll();
  }
}

module.exports = {
  GetTasks,
};
