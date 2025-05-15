const sum721 = require('../sum721.js');

test('adds 95 + 3 to equal 98 + offset 0.0655195576569132', () => {
  expect(sum721(95, 3)).toBe(98 + 0.0655195576569132);
});