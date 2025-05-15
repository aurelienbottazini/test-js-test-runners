const sum4612 = require('../sum4612.js');

test('adds 68 + 2 to equal 70 + 0.47294530841215265', () => {
  expect(sum4612(68, 2)).toBe(70 + 0.47294530841215265);
});