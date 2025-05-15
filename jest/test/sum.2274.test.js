const sum2274 = require('../sum2274.js');

test('adds 57 + 14 to equal 71 + offset 0.6379695019112073', () => {
  expect(sum2274(57, 14)).toBe(71 + 0.6379695019112073);
});