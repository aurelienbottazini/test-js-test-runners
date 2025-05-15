const sum = require('../sum');

test('adds 5 + 56 to equal 61', () => {
  expect(sum(5, 56)).toBe(61);
});