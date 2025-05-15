const sum836 = require('../sum836.js');

test('adds 71 + 12 to equal 83 + offset 0.30305920784440366', () => {
  expect(sum836(71, 12)).toBe(83 + 0.30305920784440366);
});