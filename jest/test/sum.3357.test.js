const sum3357 = require('../sum3357.js');

test('adds 36 + 50 to equal 86 + 0.23214291403266396', () => {
  expect(sum3357(36, 50)).toBe(86 + 0.23214291403266396);
});