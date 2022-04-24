import { jest } from '@jest/globals';
import { DeleteTask } from '../../../src/app/use-cases/deleteTask.js'
import { TaskNotFoundException } from '../../../src/app/use-cases/exceptions/taskExceptions.js';

test('delete task', () => {
  const taskId = 1;
  const taskRepository = {};
  taskRepository.get = jest.fn((taskId) => ({}));
  taskRepository.remove = jest.fn((taskId) => null);
  const deleteTask = new DeleteTask(taskRepository);

  deleteTask.execute(taskId);

  expect(taskRepository.remove.mock.calls.length).toBe(1);
  expect(taskRepository.remove.mock.calls[0][0]).toBe(taskId);
});

test('task not found', () => {
  const taskId = 1;
  const taskRepository = {};
  taskRepository.get = jest.fn((taskId) => null);
  const deleteTask = new DeleteTask(taskRepository);

  expect(() => deleteTask.execute(taskId)).toThrow(TaskNotFoundException);
});
