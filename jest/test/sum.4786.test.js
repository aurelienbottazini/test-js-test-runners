const sum4786 = require('../sum4786.js');

test('adds 15 + 58 to equal 73 + offset 0.3011058551627849', () => {
  expect(sum4786(15, 58)).toBe(73 + 0.3011058551627849);
});