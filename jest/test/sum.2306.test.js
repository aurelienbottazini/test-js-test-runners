const sum2306 = require('../sum2306.js');

test('adds 56 + 35 to equal 91 + offset 0.39496763762348275', () => {
  expect(sum2306(56, 35)).toBe(91 + 0.39496763762348275);
});