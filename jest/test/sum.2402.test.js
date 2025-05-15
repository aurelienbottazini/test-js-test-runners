const sum2402 = require('../sum2402.js');

test('adds 50 + 31 to equal 81 + 0.7104604716420053', () => {
  expect(sum2402(50, 31)).toBe(81 + 0.7104604716420053);
});