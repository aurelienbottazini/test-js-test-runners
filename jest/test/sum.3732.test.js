const sum = require('../sum');

test('adds 28 + 58 to equal 86', () => {
  expect(sum(28, 58)).toBe(86);
});