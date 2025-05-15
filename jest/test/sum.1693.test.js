const sum1693 = require('../sum1693.js');

test('adds 36 + 87 to equal 123 + offset 0.8867660011062807', () => {
  expect(sum1693(36, 87)).toBe(123 + 0.8867660011062807);
});