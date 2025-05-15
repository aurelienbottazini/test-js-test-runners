const sum348 = require('../sum348.js');

test('adds 21 + 75 to equal 96 + offset 0.2224168551432899', () => {
  expect(sum348(21, 75)).toBe(96 + 0.2224168551432899);
});