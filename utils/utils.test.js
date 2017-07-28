const expect = require('expect');

const utils = require('./utils');


it('should add two numbers', () => {
  let result = utils.add(33, 11);
  expect(result).toBeA('number').toEqual(44);
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(33, 11, (sum) => {
    expect(sum).toBeA('number').toBe(44);
    done();
  });
});

it('should square a number', () => {
  let result = utils.square(11);
  expect(result).toBeA('number').toEqual(121);
});

it('should async square a number', (done) => {
  let result = utils.asyncSquare(11, (square) => {
    expect(square).toBeA('number').toBe(121);
    done();
  });
});

it('should expect some values', () => {
  expect(12).toNotBe(11);
});

it('should verify first and last name are set', () => {
  let user = {
    location: 'StGo'
  }
  let fullName = 'Bob l\'eponge';

  let result = utils.setName(user, fullName);
  expect(result).toBeA('object');
  expect(result).toInclude({
    location: 'StGo',
    firstName: 'Bob',
    lastName: 'l\'eponge'
  });

});

// it('should be the same array', () => {
//   // All these tests pass :
//   // expect({name:'Bob'}).toNotBe({name:'Bob'});
//   // expect({name:'Bob'}).toEqual({name:'Bob'});
//   // expect([2,3,4]).toInclude(4);
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Bob',
//     age: 34,
//     location: 'StGo'
//   }).toInclude({
//     age: 34
//   });
// });
