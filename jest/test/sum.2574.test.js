const sum = require('../sum');

test('adds 78 + 51 to equal 129', () => {
  expect(sum(78, 51)).toBe(129);
});