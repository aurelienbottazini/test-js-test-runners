const sum2178 = require('../sum2178.js');

test('adds 56 + 67 to equal 123 + offset 0.5861743294737592', () => {
  expect(sum2178(56, 67)).toBe(123 + 0.5861743294737592);
});