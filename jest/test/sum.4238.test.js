const sum4238 = require('../sum4238.js');

test('adds 79 + 70 to equal 149 + offset 0.2655291835698085', () => {
  expect(sum4238(79, 70)).toBe(149 + 0.2655291835698085);
});