const sum = require('../sum');

test('adds 49 + 12 to equal 61', () => {
  expect(sum(49, 12)).toBe(61);
});