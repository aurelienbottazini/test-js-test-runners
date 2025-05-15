const sum = require('../sum');

test('adds 72 + 31 to equal 103', () => {
  expect(sum(72, 31)).toBe(103);
});