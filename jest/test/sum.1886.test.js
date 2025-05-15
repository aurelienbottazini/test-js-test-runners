const sum1886 = require('../sum1886.js');

test('adds 84 + 12 to equal 96 + offset 0.9892175476341534', () => {
  expect(sum1886(84, 12)).toBe(96 + 0.9892175476341534);
});