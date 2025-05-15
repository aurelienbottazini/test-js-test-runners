const sum967 = require('../sum967.js');

test('adds 8 + 17 to equal 25 + offset 0.5667032797296351', () => {
  expect(sum967(8, 17)).toBe(25 + 0.5667032797296351);
});