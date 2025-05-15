const sum3623 = require('../sum3623.js');

test('adds 43 + 80 to equal 123 + offset 0.8392750573505633', () => {
  expect(sum3623(43, 80)).toBe(123 + 0.8392750573505633);
});