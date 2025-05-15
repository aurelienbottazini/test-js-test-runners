const sum2301 = require('../sum2301.js');

test('adds 87 + 97 to equal 184 + offset 0.3002045647494789', () => {
  expect(sum2301(87, 97)).toBe(184 + 0.3002045647494789);
});