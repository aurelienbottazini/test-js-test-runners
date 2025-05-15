const sum1615 = require('../sum1615.js');

test('adds 92 + 32 to equal 124 + 0.7050234135004791', () => {
  expect(sum1615(92, 32)).toBe(124 + 0.7050234135004791);
});