import { FastifyInstance } from 'fastify';
import request from 'supertest';
import { getTestApp, cleanupTestApp } from '../utils/testUtils';

describe('Ping Endpoint Integration Tests', () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    app = await getTestApp();
  });

  afterAll(async () => {
    await cleanupTestApp(app);
  });

  describe('GET /api/ping', () => {
    it('should return 200 status with pong response', async () => {
      // This test will fail until students implement the ping endpoint
      const response = await request(app.server)
        .get('/api/ping')
        .expect(200);

      expect(response.body).toEqual({ message: 'pong' });
    });

    it('should return JSON content type', async () => {
      // This test will also fail until students implement the ping endpoint
      await request(app.server)
        .get('/api/ping')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
}); 