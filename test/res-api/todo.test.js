import supertest from 'supertest';
import { app, server } from '../../src/rest-api/server.js';

const api = supertest(app);

const basePath = '/api/todo';

describe('todo', () => {
  afterAll(() => {
    server.close();
  });

  describe(`POST ${basePath}`, () => {
    test('create task', async () => {
      const newTask = { name: 'foo' };

      const res = await api
        .post(basePath)
        .send(newTask)
        .expect(201)
        .expect('Content-Type', /application\/json/);

      expect(res.body.name).toBe(newTask.name);
      expect(res.body.done).toBe(false);
    });

    test('empty task', async () => {
      const newTask = { name: '' };

      await api
        .post(basePath)
        .send(newTask)
        .expect(400)
        .expect('Content-Type', /application\/json/);
    });
  });
});
