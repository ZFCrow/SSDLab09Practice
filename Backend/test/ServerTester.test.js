import { expect } from 'chai';
import request from 'supertest';
import app from '../server.js';

describe('Backend Server Tests', () => {
  describe('GET /', () => {
    it('should return 200 status', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);
      
      expect(response.status).to.equal(200);
    });

    it('should return "Hello from backend!" message', async () => {
      const response = await request(app)
        .get('/');
      
      expect(response.text).to.equal('Hello from backend!');
    });

    it('should have text/html content type', async () => {
      const response = await request(app)
        .get('/');
      
      expect(response.headers['content-type']).to.match(/text\/html/);
    });
  });

  describe('Non-existent routes', () => {
    it('should return 404 for unknown routes', async () => {
      const response = await request(app)
        .get('/unknown')
        .expect(404);
      
      expect(response.status).to.equal(404);
    });
  });
});