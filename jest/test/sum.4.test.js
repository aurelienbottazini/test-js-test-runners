const sum4 = require('../sum4.js');

test('adds 50 + 75 to equal 125 + 0.0986624183134841', () => {
  expect(sum4(50, 75)).toBe(125 + 0.0986624183134841);
});