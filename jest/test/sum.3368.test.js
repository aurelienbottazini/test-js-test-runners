const sum = require('../sum');

test('adds 21 + 40 to equal 61', () => {
  expect(sum(21, 40)).toBe(61);
});