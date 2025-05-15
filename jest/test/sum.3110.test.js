const sum3110 = require('../sum3110.js');

test('adds 78 + 82 to equal 160 + offset 0.05298698988042161', () => {
  expect(sum3110(78, 82)).toBe(160 + 0.05298698988042161);
});