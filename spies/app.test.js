const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });

  it('should call saveUser with user object', () => {
    let email = 'bob@bob.com';
    let password = '123ABC';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email,password});
  });
  
});
