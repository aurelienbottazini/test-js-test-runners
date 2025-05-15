const sum3710 = require('../sum3710.js');

test('adds 47 + 31 to equal 78 + 0.09281554764451583', () => {
  expect(sum3710(47, 31)).toBe(78 + 0.09281554764451583);
});