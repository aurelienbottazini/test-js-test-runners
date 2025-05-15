const sum = require('../sum');

test('adds 72 + 12 to equal 84', () => {
  expect(sum(72, 12)).toBe(84);
});