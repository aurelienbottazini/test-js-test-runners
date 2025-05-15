const sum = require('../sum');

test('adds 26 + 58 to equal 84', () => {
  expect(sum(26, 58)).toBe(84);
});