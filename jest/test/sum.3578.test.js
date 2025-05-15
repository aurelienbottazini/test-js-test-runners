const sum3578 = require('../sum3578.js');

test('adds 23 + 41 to equal 64 + offset 0.7362979564969269', () => {
  expect(sum3578(23, 41)).toBe(64 + 0.7362979564969269);
});