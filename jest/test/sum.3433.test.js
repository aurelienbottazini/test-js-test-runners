const sum3433 = require('../sum3433.js');

test('adds 40 + 16 to equal 56 + offset 0.017973695981812532', () => {
  expect(sum3433(40, 16)).toBe(56 + 0.017973695981812532);
});