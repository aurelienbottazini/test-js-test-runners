const sum = require('../sum');

test('adds 96 + 33 to equal 129', () => {
  expect(sum(96, 33)).toBe(129);
});