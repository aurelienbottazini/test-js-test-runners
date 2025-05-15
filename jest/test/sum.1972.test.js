const sum1972 = require('../sum1972.js');

test('adds 8 + 15 to equal 23 + offset 0.9943519597944537', () => {
  expect(sum1972(8, 15)).toBe(23 + 0.9943519597944537);
});