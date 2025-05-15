const sum2817 = require('../sum2817.js');

test('adds 94 + 6 to equal 100 + 0.9819312219001752', () => {
  expect(sum2817(94, 6)).toBe(100 + 0.9819312219001752);
});