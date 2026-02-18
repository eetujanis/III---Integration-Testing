const request = require('supertest');
const app = require('../src/app.js');

test('GET /convert returns correct RGB', async () => {
  const res = await request(app).get('/convert?hex=ff5733');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ r: 255, g: 87, b: 51 });
});
