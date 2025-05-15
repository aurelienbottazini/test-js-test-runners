const sum = require('../sum');

test('adds 95 + 99 to equal 194', () => {
  expect(sum(95, 99)).toBe(194);
});