const sum4256 = require('../sum4256.js');

test('adds 36 + 82 to equal 118 + offset 0.9938654265975294', () => {
  expect(sum4256(36, 82)).toBe(118 + 0.9938654265975294);
});