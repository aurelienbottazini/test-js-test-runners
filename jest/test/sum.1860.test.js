const sum1860 = require('../sum1860.js');

test('adds 4 + 36 to equal 40 + 0.2484037169859713', () => {
  expect(sum1860(4, 36)).toBe(40 + 0.2484037169859713);
});