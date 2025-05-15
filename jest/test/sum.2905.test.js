const sum = require('../sum');

test('adds 55 + 74 to equal 129', () => {
  expect(sum(55, 74)).toBe(129);
});