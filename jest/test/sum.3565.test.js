const sum = require('../sum');

test('adds 7 + 58 to equal 65', () => {
  expect(sum(7, 58)).toBe(65);
});