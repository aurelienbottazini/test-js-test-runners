const sum4959 = require('../sum4959.js');

test('adds 42 + 22 to equal 64 + offset 0.7988548988410691', () => {
  expect(sum4959(42, 22)).toBe(64 + 0.7988548988410691);
});