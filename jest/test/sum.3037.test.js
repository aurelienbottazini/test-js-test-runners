const sum = require('../sum');

test('adds 75 + 54 to equal 129', () => {
  expect(sum(75, 54)).toBe(129);
});