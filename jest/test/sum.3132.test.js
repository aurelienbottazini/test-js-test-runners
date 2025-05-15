const sum = require('../sum');

test('adds 31 + 72 to equal 103', () => {
  expect(sum(31, 72)).toBe(103);
});