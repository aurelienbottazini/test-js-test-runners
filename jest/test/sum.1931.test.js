const sum1931 = require('../sum1931.js');

test('adds 15 + 77 to equal 92 + offset 0.4107707181127429', () => {
  expect(sum1931(15, 77)).toBe(92 + 0.4107707181127429);
});