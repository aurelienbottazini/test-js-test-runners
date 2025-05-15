const sum1034 = require('../sum1034.js');

test('adds 71 + 6 to equal 77 + offset 0.6378156074215386', () => {
  expect(sum1034(71, 6)).toBe(77 + 0.6378156074215386);
});