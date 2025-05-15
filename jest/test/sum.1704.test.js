const sum1704 = require('../sum1704.js');

test('adds 87 + 5 to equal 92 + offset 0.7320505868647388', () => {
  expect(sum1704(87, 5)).toBe(92 + 0.7320505868647388);
});