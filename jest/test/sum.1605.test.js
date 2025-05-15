const sum1605 = require('../sum1605.js');

test('adds 42 + 1 to equal 43 + 0.31639364061223885', () => {
  expect(sum1605(42, 1)).toBe(43 + 0.31639364061223885);
});