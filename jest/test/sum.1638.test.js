const sum1638 = require('../sum1638.js');

test('adds 28 + 34 to equal 62 + 0.40862387054166815', () => {
  expect(sum1638(28, 34)).toBe(62 + 0.40862387054166815);
});