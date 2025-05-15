const sum1249 = require('../sum1249.js');

test('adds 53 + 23 to equal 76 + 0.9333351090506621', () => {
  expect(sum1249(53, 23)).toBe(76 + 0.9333351090506621);
});