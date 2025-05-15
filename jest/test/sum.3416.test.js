const sum3416 = require('../sum3416.js');

test('adds 14 + 10 to equal 24 + offset 0.6133452218037839', () => {
  expect(sum3416(14, 10)).toBe(24 + 0.6133452218037839);
});