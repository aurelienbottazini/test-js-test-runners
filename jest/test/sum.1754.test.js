const sum1754 = require('../sum1754.js');

test('adds 13 + 58 to equal 71 + offset 0.9553194352110709', () => {
  expect(sum1754(13, 58)).toBe(71 + 0.9553194352110709);
});