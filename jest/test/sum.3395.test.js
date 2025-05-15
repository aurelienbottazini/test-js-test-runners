const sum3395 = require('../sum3395.js');

test('adds 8 + 69 to equal 77 + offset 0.5697261346288687', () => {
  expect(sum3395(8, 69)).toBe(77 + 0.5697261346288687);
});