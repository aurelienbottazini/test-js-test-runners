const sum233 = require('../sum233.js');

test('adds 38 + 77 to equal 115 + offset 0.8811469407566276', () => {
  expect(sum233(38, 77)).toBe(115 + 0.8811469407566276);
});