const sum3637 = require('../sum3637.js');

test('adds 28 + 91 to equal 119 + offset 0.9819126540576053', () => {
  expect(sum3637(28, 91)).toBe(119 + 0.9819126540576053);
});