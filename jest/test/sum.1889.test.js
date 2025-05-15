const sum1889 = require('../sum1889.js');

test('adds 12 + 18 to equal 30 + offset 0.6755864185674373', () => {
  expect(sum1889(12, 18)).toBe(30 + 0.6755864185674373);
});