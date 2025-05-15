const sum = require('../sum');

test('adds 53 + 76 to equal 129', () => {
  expect(sum(53, 76)).toBe(129);
});