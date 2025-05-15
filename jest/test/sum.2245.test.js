const sum = require('../sum');

test('adds 47 + 56 to equal 103', () => {
  expect(sum(47, 56)).toBe(103);
});