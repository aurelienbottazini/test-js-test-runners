const sum1925 = require('../sum1925.js');

test('adds 83 + 18 to equal 101 + 0.0343139108593441', () => {
  expect(sum1925(83, 18)).toBe(101 + 0.0343139108593441);
});