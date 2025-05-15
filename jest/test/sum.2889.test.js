const sum = require('../sum');

test('adds 72 + 57 to equal 129', () => {
  expect(sum(72, 57)).toBe(129);
});