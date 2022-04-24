import { jest } from '@jest/globals';
import { ToggleDoneTask } from '../../../src/app/use-cases/toggleDoneTask.js';
import { TaskNotFoundException } from '../../../src/app/use-cases/exceptions/taskExceptions.js';

test('toggle done task', () => {
  const taskId = 1;
  const taskRepository = {};
  taskRepository.get = jest.fn((taskId) => ({ done: false }));
  taskRepository.update = jest.fn((task) => null);
  const toggleDoneTask = new ToggleDoneTask(taskRepository);

  expect(toggleDoneTask.execute(taskId)).toEqual({ done: true });

  expect(taskRepository.get.mock.calls.length).toBe(1);
  expect(taskRepository.get.mock.calls[0][0]).toBe(taskId);
  expect(taskRepository.update.mock.calls[0][0]).toEqual({ done: true });
});

test('task not found', () => {
  const taskId = 1;
  const taskRepository = {};
  taskRepository.get = jest.fn((taskId) => null);
  const toggleDoneTask = new ToggleDoneTask(taskRepository);

  expect(() => toggleDoneTask.execute(taskId)).toThrow(TaskNotFoundException);
});
