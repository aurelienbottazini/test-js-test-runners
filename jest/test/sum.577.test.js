const sum = require('../sum');

test('adds 36 + 93 to equal 129', () => {
  expect(sum(36, 93)).toBe(129);
});