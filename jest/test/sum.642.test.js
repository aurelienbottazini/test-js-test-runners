const sum = require('../sum');

test('adds 99 + 58 to equal 157', () => {
  expect(sum(99, 58)).toBe(157);
});