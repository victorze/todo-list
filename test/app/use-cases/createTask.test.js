const { CreateTask } = require('../../../src/app/use-cases/createTask');
const { Task } = require('../../../src/app/domain/task');
const {
  EmptyTaskException,
} = require('../../../src/app/use-cases/exceptions/taskExceptions');

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
