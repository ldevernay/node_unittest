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
