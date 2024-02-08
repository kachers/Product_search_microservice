const request = require('supertest');
const app = require('../index');

describe('Server setup', () => {
  it('responds with 400 for /api/search with invalid query parameter', async () => {
    const response = await request(app).get('/api/search').query({ query: '' });
    expect(response.statusCode).toBe(400);
  });

  it('responds with 400 for /api/search with invalid page parameter', async () => {
    const response = await request(app).get('/api/search').query({ query: 'validQuery', page: 'invalidPage' });
    expect(response.statusCode).toBe(400);
  });
});