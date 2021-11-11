const { CreateTask } = require('../../../../../src/core/use-cases/create-task');
const { Task } = require('../../../../../src/core/entities/task');
const {
  EmptyTaskNameException,
} = require('../../../../../src/core/exceptions/task-exceptions');

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

test('empty task exception', () => {
  const createTask = new CreateTask({});
  const task = new Task('');

  expect(() => createTask.execute(task)).toThrow(EmptyTaskNameException);
});
