const sum = require('../sum');

test('adds 52 + 51 to equal 103', () => {
  expect(sum(52, 51)).toBe(103);
});