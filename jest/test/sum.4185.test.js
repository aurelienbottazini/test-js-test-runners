const sum4185 = require('../sum4185.js');

test('adds 8 + 48 to equal 56 + offset 0.9790889732486372', () => {
  expect(sum4185(8, 48)).toBe(56 + 0.9790889732486372);
});