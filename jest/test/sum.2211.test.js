const sum = require('../sum');

test('adds 56 + 58 to equal 114', () => {
  expect(sum(56, 58)).toBe(114);
});