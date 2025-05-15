const sum = require('../sum');

test('adds 65 + 64 to equal 129', () => {
  expect(sum(65, 64)).toBe(129);
});