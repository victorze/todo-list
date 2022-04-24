import { jest } from '@jest/globals';
import { CreateTask } from '../../../src/app/use-cases/createTask.js';
import { Task } from '../../../src/app/domain/task.js';
import { EmptyTaskException } from '../../../src/app/use-cases/exceptions/taskExceptions.js';

test('create task', () => {
  const taskRepository = {};
  taskRepository.add = jest.fn((task) => null);
  const createTask = new CreateTask(taskRepository);
  const task = new Task('foo');

  const newTask = createTask.execute(task);

  expect(newTask).toEqual(task);
  expect(taskRepository.add.mock.calls.length).toBe(1);
  expect(taskRepository.add.mock.calls[0][0]).toBe(task);
});

test('empty task', () => {
  const createTask = new CreateTask({});
  const task = new Task('');

  expect(() => createTask.execute(task)).toThrow(EmptyTaskException);
});
