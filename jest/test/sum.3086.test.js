const sum = require('../sum');

test('adds 86 + 17 to equal 103', () => {
  expect(sum(86, 17)).toBe(103);
});