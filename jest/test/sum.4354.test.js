const sum = require('../sum');

test('adds 88 + 41 to equal 129', () => {
  expect(sum(88, 41)).toBe(129);
});