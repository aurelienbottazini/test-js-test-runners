const sum = require('../sum');

test('adds 21 + 82 to equal 103', () => {
  expect(sum(21, 82)).toBe(103);
});