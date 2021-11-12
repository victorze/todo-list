const { GetTasks } = require('../../../../../src/core/use-cases/getTasks');

test('get tasks', () => {
  const taskRepository = {};
  taskRepository.getAll = jest.fn(() => []);
  const getTasks = new GetTasks(taskRepository);

  getTasks.execute();

  expect(taskRepository.getAll.mock.calls.length).toBe(1);
});
