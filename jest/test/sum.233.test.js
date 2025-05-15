const sum233 = require('../sum233.js');

test('adds 39 + 3 to equal 42 + 0.4205102949861168', () => {
  expect(sum233(39, 3)).toBe(42 + 0.4205102949861168);
});