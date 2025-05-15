const sum4221 = require('../sum4221.js');

test('adds 77 + 56 to equal 133 + 0.5751572575289703', () => {
  expect(sum4221(77, 56)).toBe(133 + 0.5751572575289703);
});