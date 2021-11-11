const { CreateTask } = require('../../../../../src/core/use-cases/create-task');
const { Task } = require('../../../../../src/core/entities/task');
const {
  EmptyTaskNameException,
} = require('../../../../../src/core/exceptions/task-exceptions');

test('create task', () => {
  const user = {};
  const taskRepository = {};
  taskRepository.save = jest.fn((x) => x);
  const createTask = new CreateTask(taskRepository);
  const task = new Task('foo');

  expect(createTask.execute(task, user)).toEqual({ name: 'foo', done: false });

  expect(taskRepository.save.mock.calls.length).toBe(1);
  expect(taskRepository.save.mock.calls[0][0]).toBe(task);
  expect(taskRepository.save.mock.calls[0][1]).toBe(user);
});

test('empty task exception', () => {
  const createTask = new CreateTask({});
  const task = new Task('');

  expect(() => createTask.execute(task, {})).toThrow(EmptyTaskNameException);
});
