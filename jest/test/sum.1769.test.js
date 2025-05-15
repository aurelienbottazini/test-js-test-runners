const sum1769 = require('../sum1769.js');

test('adds 32 + 43 to equal 75 + offset 0.03143944795349396', () => {
  expect(sum1769(32, 43)).toBe(75 + 0.03143944795349396);
});