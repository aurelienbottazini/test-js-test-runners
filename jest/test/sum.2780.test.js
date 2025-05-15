const sum2780 = require('../sum2780.js');

test('adds 50 + 62 to equal 112 + 0.47846846504934615', () => {
  expect(sum2780(50, 62)).toBe(112 + 0.47846846504934615);
});