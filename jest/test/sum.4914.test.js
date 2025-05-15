const sum4914 = require('../sum4914.js');

test('adds 58 + 91 to equal 149 + 0.24155786678541824', () => {
  expect(sum4914(58, 91)).toBe(149 + 0.24155786678541824);
});