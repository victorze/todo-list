import { TaskNotFoundException } from './exceptions/taskExceptions.js';

export class ToggleDoneTask {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  execute(taskId) {
    const task = this.taskRepository.get(taskId);

    if (!task) {
      throw new TaskNotFoundException();
    }

    task.done = !task.done;
    this.taskRepository.update(task);
    return task;
  }
}
