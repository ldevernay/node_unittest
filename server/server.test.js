const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

it('should return Hello World', (done) => {
  request(app)
  .get('/')
  .expect(200)
  .expect('Hello World!')
  .end(done);
});

it('should provide no help', (done) => {
  request(app)
  .get('/help')
  .expect(404)
  .expect((res) => {
    expect(res.body).toInclude({
      error: "Help not found.",
      name: "Busy"
    });
  })
  .end(done);
});

it('should return an array containing Bob', (done) => {
  request(app)
  .get('/users')
  .expect(200)
  .expect((res) => {
    expect(res.body).toInclude({
      name: 'Bob',
      age: 34
    });
  })
  .end(done);
});
