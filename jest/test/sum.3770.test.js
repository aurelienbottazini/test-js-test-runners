const sum = require('../sum');

test('adds 23 + 58 to equal 81', () => {
  expect(sum(23, 58)).toBe(81);
});