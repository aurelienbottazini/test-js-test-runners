const sum = require('../sum');

test('adds 79 + 50 to equal 129', () => {
  expect(sum(79, 50)).toBe(129);
});