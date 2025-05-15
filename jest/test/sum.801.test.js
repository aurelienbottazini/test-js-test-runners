const sum = require('../sum');

test('adds 5 + 98 to equal 103', () => {
  expect(sum(5, 98)).toBe(103);
});