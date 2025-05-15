const sum2786 = require('../sum2786.js');

test('adds 11 + 37 to equal 48 + offset 0.4032597654424459', () => {
  expect(sum2786(11, 37)).toBe(48 + 0.4032597654424459);
});