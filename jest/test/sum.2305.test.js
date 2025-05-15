const sum2305 = require('../sum2305.js');

test('adds 90 + 22 to equal 112 + 0.3217050494142212', () => {
  expect(sum2305(90, 22)).toBe(112 + 0.3217050494142212);
});