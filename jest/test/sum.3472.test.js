const sum3472 = require('../sum3472.js');

test('adds 52 + 6 to equal 58 + offset 0.21652539211822286', () => {
  expect(sum3472(52, 6)).toBe(58 + 0.21652539211822286);
});