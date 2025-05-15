const sum256 = require('../sum256.js');

test('adds 66 + 64 to equal 130 + 0.7895484891362629', () => {
  expect(sum256(66, 64)).toBe(130 + 0.7895484891362629);
});