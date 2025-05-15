const sum1175 = require('../sum1175.js');

test('adds 7 + 69 to equal 76 + offset 0.7450314903434788', () => {
  expect(sum1175(7, 69)).toBe(76 + 0.7450314903434788);
});