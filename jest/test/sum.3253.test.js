const sum3253 = require('../sum3253.js');

test('adds 55 + 42 to equal 97 + 0.08183931631589791', () => {
  expect(sum3253(55, 42)).toBe(97 + 0.08183931631589791);
});