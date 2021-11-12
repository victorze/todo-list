const request = require('supertest');
const { app, server } = require('../../src/rest-api/server');

const api = request(app);

const basePath = '/api/todos';

describe('todos', () => {
  afterAll(() => {
    server.close();
  });

  describe(`POST ${basePath}`, () => {
    test('create task', async () => {
      const newTask = { name: 'foo' };

      const res = await api
        .post('/api/todo')
        .send(newTask)
        .expect(201)
        .expect('Content-Type', /application\/json/);

      expect(res.body.name).toBe(newTask.name);
      expect(res.body.done).toBe(false);
    });

    test('empty task', async () => {
      const newTask = { name: '' };

      await api
        .post('/api/todo')
        .send(newTask)
        .expect(400)
        .expect('Content-Type', /application\/json/);
    });
  });
});
