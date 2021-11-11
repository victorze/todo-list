const {
  ToggleDoneTask,
} = require('../../../../../src/core/use-cases/toggle-done-task');

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
