const sum318 = require('../sum318.js');

test('adds 20 + 52 to equal 72 + offset 0.06892045196508689', () => {
  expect(sum318(20, 52)).toBe(72 + 0.06892045196508689);
});