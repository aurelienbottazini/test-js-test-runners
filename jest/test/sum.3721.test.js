const sum = require('../sum');

test('adds 68 + 61 to equal 129', () => {
  expect(sum(68, 61)).toBe(129);
});