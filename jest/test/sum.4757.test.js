const sum4757 = require('../sum4757.js');

test('adds 87 + 63 to equal 150 + offset 0.5482431692409322', () => {
  expect(sum4757(87, 63)).toBe(150 + 0.5482431692409322);
});