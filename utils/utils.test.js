const expect = require('expect');

const utils = require('./utils');


it('should add two numbers', () => {
  let result = utils.add(33, 11);
  expect(result).toBeA('number').toEqual(44);
});

it('should square a number', () => {
  let result = utils.square(11);
  expect(result).toBeA('number').toEqual(121);
});

it('should expect some values', () => {
  expect(12).toNotBe(11);
});

it('should be the same array', () => {
  // All these tests pass :
  // expect({name:'Bob'}).toNotBe({name:'Bob'});
  // expect({name:'Bob'}).toEqual({name:'Bob'});
  // expect([2,3,4]).toInclude(4);
  // expect([2,3,4]).toExclude(1);
  expect({
    name: 'Bob',
    age: 34,
    location: 'StGo'
  }).toInclude({
    age: 34
  });
});
