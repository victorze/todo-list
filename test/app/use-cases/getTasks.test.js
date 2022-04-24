import { jest } from '@jest/globals';
import { GetTasks } from '../../../src/app/use-cases/getTasks.js';

test('get tasks', () => {
  const taskRepository = {};
  taskRepository.getAll = jest.fn(() => []);
  const getTasks = new GetTasks(taskRepository);

  getTasks.execute();

  expect(taskRepository.getAll.mock.calls.length).toBe(1);
});
