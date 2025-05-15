const sum3665 = require('../sum3665.js');

test('adds 77 + 86 to equal 163 + offset 0.6987907480001068', () => {
  expect(sum3665(77, 86)).toBe(163 + 0.6987907480001068);
});