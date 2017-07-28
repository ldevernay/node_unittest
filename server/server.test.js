const request = require('supertest');

let app = require('./server').app;

it('should return Hello World', (done) => {
  request(app)
  .get('/')
  .expect(200)
  .expect('Hello World!')
  .end(done);
})
