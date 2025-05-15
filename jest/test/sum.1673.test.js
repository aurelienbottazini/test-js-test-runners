const sum1673 = require('../sum1673.js');

test('adds 44 + 86 to equal 130 + 0.9009319879874292', () => {
  expect(sum1673(44, 86)).toBe(130 + 0.9009319879874292);
});