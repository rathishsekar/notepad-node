const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./app.js');

beforeEach(() => {
  server = app.listen(3000, () => console.log('Listening on port 3000'));
});

afterEach(async () => {
  await server.close();
});

afterAll(() => {
  mongoose.connection.close();
});

describe('Notes App', () => {
  it('Get All Notes', async () => {
    const res = await request(server).get('/notes');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].name).toBe('Note1');
  });
});
