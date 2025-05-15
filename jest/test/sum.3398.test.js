const sum3398 = require('../sum3398.js');

test('adds 42 + 58 to equal 100 + 0.4544711752131677', () => {
  expect(sum3398(42, 58)).toBe(100 + 0.4544711752131677);
});