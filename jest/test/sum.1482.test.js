const sum = require('../sum');

test('adds 13 + 58 to equal 71', () => {
  expect(sum(13, 58)).toBe(71);
});