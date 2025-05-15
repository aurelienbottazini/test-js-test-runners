const sum2124 = require('../sum2124.js');

test('adds 6 + 22 to equal 28 + offset 0.5860441608749689', () => {
  expect(sum2124(6, 22)).toBe(28 + 0.5860441608749689);
});