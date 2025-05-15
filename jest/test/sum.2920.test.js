const sum2920 = require('../sum2920.js');

test('adds 67 + 19 to equal 86 + offset 0.9314781966959711', () => {
  expect(sum2920(67, 19)).toBe(86 + 0.9314781966959711);
});