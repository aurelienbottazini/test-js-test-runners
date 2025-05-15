const sum = require('../sum');

test('adds 97 + 32 to equal 129', () => {
  expect(sum(97, 32)).toBe(129);
});