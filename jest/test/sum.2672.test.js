const sum2672 = require('../sum2672.js');

test('adds 95 + 5 to equal 100 + offset 0.693640148512525', () => {
  expect(sum2672(95, 5)).toBe(100 + 0.693640148512525);
});