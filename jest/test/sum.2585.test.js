const sum = require('../sum');

test('adds 37 + 92 to equal 129', () => {
  expect(sum(37, 92)).toBe(129);
});