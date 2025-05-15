const sum2040 = require('../sum2040.js');

test('adds 45 + 47 to equal 92 + offset 0.4290189033011903', () => {
  expect(sum2040(45, 47)).toBe(92 + 0.4290189033011903);
});