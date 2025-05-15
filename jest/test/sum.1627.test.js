const sum1627 = require('../sum1627.js');

test('adds 47 + 58 to equal 105 + 0.9727572309487105', () => {
  expect(sum1627(47, 58)).toBe(105 + 0.9727572309487105);
});