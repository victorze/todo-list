const { CreateTask } = require('../../../../../src/core/use-cases/create-task');
const { Task } = require('../../../../../src/core/entities/task');
const {
  EmptyTaskNameException,
} = require('../../../../../src/core/exceptions/task-exceptions');

test('create task', () => {
  const userId = 1;
  const taskRepository = {};
  taskRepository.save = jest.fn((x) => x);
  const createTask = new CreateTask(taskRepository);
  const task = new Task('foo');

  expect(createTask.execute(task, userId)).toEqual({
    name: 'foo',
    done: false,
  });

  expect(taskRepository.save.mock.calls.length).toBe(1);
  expect(taskRepository.save.mock.calls[0][0]).toBe(task);
  expect(taskRepository.save.mock.calls[0][1]).toBe(userId);
});

test('empty task exception', () => {
  const createTask = new CreateTask({});
  const task = new Task('');

  expect(() => createTask.execute(task, 1)).toThrow(EmptyTaskNameException);
});
