const sum = require('../sum');

test('adds 48 + 81 to equal 129', () => {
  expect(sum(48, 81)).toBe(129);
});