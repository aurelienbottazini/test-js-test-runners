const sum936 = require('../sum936.js');

test('adds 17 + 14 to equal 31 + 0.7536986806620829', () => {
  expect(sum936(17, 14)).toBe(31 + 0.7536986806620829);
});