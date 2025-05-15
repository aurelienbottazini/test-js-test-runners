const sum = require('../sum');

test('adds 42 + 87 to equal 129', () => {
  expect(sum(42, 87)).toBe(129);
});