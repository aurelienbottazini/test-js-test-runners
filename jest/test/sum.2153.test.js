const sum2153 = require('../sum2153.js');

test('adds 55 + 52 to equal 107 + 0.5303581414847511', () => {
  expect(sum2153(55, 52)).toBe(107 + 0.5303581414847511);
});