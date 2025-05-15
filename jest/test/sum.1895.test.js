const sum1895 = require('../sum1895.js');

test('adds 36 + 71 to equal 107 + 0.6438703891065269', () => {
  expect(sum1895(36, 71)).toBe(107 + 0.6438703891065269);
});