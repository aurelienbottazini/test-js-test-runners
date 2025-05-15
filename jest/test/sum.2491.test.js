const sum = require('../sum');

test('adds 60 + 1 to equal 61', () => {
  expect(sum(60, 1)).toBe(61);
});