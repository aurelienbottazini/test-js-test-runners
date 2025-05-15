const sum = require('../sum');

test('adds 56 + 38 to equal 94', () => {
  expect(sum(56, 38)).toBe(94);
});