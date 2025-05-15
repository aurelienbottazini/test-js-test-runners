const sum = require('../sum');

test('adds 24 + 37 to equal 61', () => {
  expect(sum(24, 37)).toBe(61);
});