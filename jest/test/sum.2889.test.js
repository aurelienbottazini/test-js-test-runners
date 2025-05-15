const sum2889 = require('../sum2889.js');

test('adds 46 + 85 to equal 131 + offset 0.0684762821665773', () => {
  expect(sum2889(46, 85)).toBe(131 + 0.0684762821665773);
});