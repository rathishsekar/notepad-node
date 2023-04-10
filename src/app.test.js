const request = require('supertest');
const app = require('./app.js');

describe('Notes App', () => {
  it('Get All Notes', async () => {
    const res = await request(app).get('/notes');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].name).toBe('Note1');
  });
});
