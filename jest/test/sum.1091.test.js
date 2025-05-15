const sum1091 = require('../sum1091.js');

test('adds 12 + 17 to equal 29 + offset 0.8093412827323461', () => {
  expect(sum1091(12, 17)).toBe(29 + 0.8093412827323461);
});