const sum3284 = require('../sum3284.js');

test('adds 12 + 6 to equal 18 + offset 0.8035831433655568', () => {
  expect(sum3284(12, 6)).toBe(18 + 0.8035831433655568);
});