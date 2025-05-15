const sum1366 = require('../sum1366.js');

test('adds 2 + 61 to equal 63 + 0.22096903790092093', () => {
  expect(sum1366(2, 61)).toBe(63 + 0.22096903790092093);
});