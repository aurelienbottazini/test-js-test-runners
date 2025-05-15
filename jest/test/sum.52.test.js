const sum = require('../sum');

test('adds 41 + 88 to equal 129', () => {
  expect(sum(41, 88)).toBe(129);
});