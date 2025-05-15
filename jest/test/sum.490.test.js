const sum490 = require('../sum490.js');

test('adds 80 + 41 to equal 121 + 0.6886169161975173', () => {
  expect(sum490(80, 41)).toBe(121 + 0.6886169161975173);
});