const sum2658 = require('../sum2658.js');

test('adds 86 + 58 to equal 144 + offset 0.6035024910144811', () => {
  expect(sum2658(86, 58)).toBe(144 + 0.6035024910144811);
});