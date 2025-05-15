const sum3138 = require('../sum3138.js');

test('adds 54 + 9 to equal 63 + offset 0.32107099958411944', () => {
  expect(sum3138(54, 9)).toBe(63 + 0.32107099958411944);
});