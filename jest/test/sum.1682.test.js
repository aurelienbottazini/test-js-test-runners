const sum = require('../sum');

test('adds 71 + 58 to equal 129', () => {
  expect(sum(71, 58)).toBe(129);
});