const sum4378 = require('../sum4378.js');

test('adds 34 + 35 to equal 69 + offset 0.782847141054916', () => {
  expect(sum4378(34, 35)).toBe(69 + 0.782847141054916);
});