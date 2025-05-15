const sum1118 = require('../sum1118.js');

test('adds 14 + 58 to equal 72 + offset 0.39461229324585867', () => {
  expect(sum1118(14, 58)).toBe(72 + 0.39461229324585867);
});