const sum3732 = require('../sum3732.js');

test('adds 36 + 37 to equal 73 + offset 0.6063234324862582', () => {
  expect(sum3732(36, 37)).toBe(73 + 0.6063234324862582);
});