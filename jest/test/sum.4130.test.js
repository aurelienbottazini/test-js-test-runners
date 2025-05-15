const sum = require('../sum');

test('adds 23 + 38 to equal 61', () => {
  expect(sum(23, 38)).toBe(61);
});