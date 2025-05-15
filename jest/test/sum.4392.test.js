const sum4392 = require('../sum4392.js');

test('adds 84 + 23 to equal 107 + 0.7258447842422503', () => {
  expect(sum4392(84, 23)).toBe(107 + 0.7258447842422503);
});