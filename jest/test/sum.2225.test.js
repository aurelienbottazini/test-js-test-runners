const sum2225 = require('../sum2225.js');

test('adds 96 + 83 to equal 179 + offset 0.7871829177664094', () => {
  expect(sum2225(96, 83)).toBe(179 + 0.7871829177664094);
});