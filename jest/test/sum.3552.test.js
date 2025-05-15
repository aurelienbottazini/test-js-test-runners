const sum = require('../sum');

test('adds 91 + 38 to equal 129', () => {
  expect(sum(91, 38)).toBe(129);
});