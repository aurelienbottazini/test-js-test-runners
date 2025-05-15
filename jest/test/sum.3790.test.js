const sum3790 = require('../sum3790.js');

test('adds 87 + 1 to equal 88 + 0.7970391733800517', () => {
  expect(sum3790(87, 1)).toBe(88 + 0.7970391733800517);
});