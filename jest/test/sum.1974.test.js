const sum1974 = require('../sum1974.js');

test('adds 83 + 38 to equal 121 + offset 0.414731605398027', () => {
  expect(sum1974(83, 38)).toBe(121 + 0.414731605398027);
});