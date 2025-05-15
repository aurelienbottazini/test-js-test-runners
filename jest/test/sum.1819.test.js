const sum1819 = require('../sum1819.js');

test('adds 40 + 57 to equal 97 + 0.6985398862649562', () => {
  expect(sum1819(40, 57)).toBe(97 + 0.6985398862649562);
});