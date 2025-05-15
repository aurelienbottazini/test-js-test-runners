const sum1560 = require('../sum1560.js');

test('adds 56 + 13 to equal 69 + offset 0.1530439313128632', () => {
  expect(sum1560(56, 13)).toBe(69 + 0.1530439313128632);
});