const { DeleteTask } = require('../../../../../core/use-cases/deleteTask');
const {
  TaskNotFoundException,
} = require('../../../../../core/exceptions/taskExceptions');

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
