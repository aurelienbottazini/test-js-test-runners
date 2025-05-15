const sum2343 = require('../sum2343.js');

test('adds 58 + 68 to equal 126 + offset 0.5630931454335744', () => {
  expect(sum2343(58, 68)).toBe(126 + 0.5630931454335744);
});