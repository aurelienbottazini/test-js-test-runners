const sum2149 = require('../sum2149.js');

test('adds 31 + 55 to equal 86 + offset 0.5026231242984492', () => {
  expect(sum2149(31, 55)).toBe(86 + 0.5026231242984492);
});