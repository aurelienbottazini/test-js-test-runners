const sum1279 = require('../sum1279.js');

test('adds 20 + 36 to equal 56 + offset 0.6949196897819626', () => {
  expect(sum1279(20, 36)).toBe(56 + 0.6949196897819626);
});