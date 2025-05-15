const sum4541 = require('../sum4541.js');

test('adds 52 + 69 to equal 121 + offset 0.19466042749745094', () => {
  expect(sum4541(52, 69)).toBe(121 + 0.19466042749745094);
});