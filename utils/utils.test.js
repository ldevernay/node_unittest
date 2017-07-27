const utils = require('./utils');

it('should add two numbers', () => {
  let result = utils.add(33, 11);
  if(result !== 44){
    throw new Error(`Expected 44, got ${result}`);
  }
});

it('should square a number', () => {
  let result = utils.square(11);
  if(result !== 121){
    throw new Error(`Expected 121, got ${result}`);
  }
});
