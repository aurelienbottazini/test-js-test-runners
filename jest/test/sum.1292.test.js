const sum = require('../sum');

test('adds 43 + 86 to equal 129', () => {
  expect(sum(43, 86)).toBe(129);
});