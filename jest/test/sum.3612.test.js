const sum3612 = require('../sum3612.js');

test('adds 71 + 42 to equal 113 + offset 0.2298668474593527', () => {
  expect(sum3612(71, 42)).toBe(113 + 0.2298668474593527);
});