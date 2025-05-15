const sum947 = require('../sum947.js');

test('adds 66 + 55 to equal 121 + offset 0.6714102693254895', () => {
  expect(sum947(66, 55)).toBe(121 + 0.6714102693254895);
});