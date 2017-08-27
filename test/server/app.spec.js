const app = require('../../server/app');
const supertest = require('supertest');

const request = supertest.agent(app);

describe('Server', () => {
  it('listens', () => request.get('/invalid_path').expect(404));
});
