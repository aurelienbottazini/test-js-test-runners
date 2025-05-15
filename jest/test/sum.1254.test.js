const sum1254 = require('../sum1254.js');

test('adds 56 + 41 to equal 97 + 0.29621919320150014', () => {
  expect(sum1254(56, 41)).toBe(97 + 0.29621919320150014);
});