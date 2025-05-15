const sum1599 = require('../sum1599.js');

test('adds 99 + 42 to equal 141 + offset 0.9145668129689211', () => {
  expect(sum1599(99, 42)).toBe(141 + 0.9145668129689211);
});