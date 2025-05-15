const sum = require('../sum');

test('adds 31 + 98 to equal 129', () => {
  expect(sum(31, 98)).toBe(129);
});