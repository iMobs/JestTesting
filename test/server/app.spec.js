const app = require('../../server/app');
const supertest = require('supertest');

const request = supertest.agent(app);

describe('Server', () => {
  it('returns the index', () => request.get('/').expect(200));
  it('responsds with 404 for invalid paths', () => request.get('/invalid_path').expect(404));
});
