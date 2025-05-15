const sum3280 = require('../sum3280.js');

test('adds 4 + 59 to equal 63 + offset 0.7534925139924527', () => {
  expect(sum3280(4, 59)).toBe(63 + 0.7534925139924527);
});