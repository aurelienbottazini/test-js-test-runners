const sum = require('../sum');

test('adds 74 + 55 to equal 129', () => {
  expect(sum(74, 55)).toBe(129);
});