const expect = require('expect');

const utils = require('./utils');


it('should add two numbers', () => {
  let result = utils.add(33, 11);
  expect(result).toBeA('number').toEqual(44);
  // if(result !== 44){
  //   throw new Error(`Expected 44, got ${result}`);
  // }
});

it('should square a number', () => {
  let result = utils.square(11);
  expect(result).toEqual(121);
});
