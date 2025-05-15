const sum2661 = require('../sum2661.js');

test('adds 28 + 47 to equal 75 + offset 0.9042509603553822', () => {
  expect(sum2661(28, 47)).toBe(75 + 0.9042509603553822);
});