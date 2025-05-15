const sum1299 = require('../sum1299.js');

test('adds 64 + 26 to equal 90 + offset 0.2832312202538366', () => {
  expect(sum1299(64, 26)).toBe(90 + 0.2832312202538366);
});