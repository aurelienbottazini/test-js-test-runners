const sum = require('../sum');

test('adds 14 + 58 to equal 72', () => {
  expect(sum(14, 58)).toBe(72);
});