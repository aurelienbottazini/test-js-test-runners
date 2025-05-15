const sum = require('../sum');

test('adds 28 + 75 to equal 103', () => {
  expect(sum(28, 75)).toBe(103);
});