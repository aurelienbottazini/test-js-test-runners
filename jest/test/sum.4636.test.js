const sum4636 = require('../sum4636.js');

test('adds 74 + 44 to equal 118 + offset 0.2758132852819011', () => {
  expect(sum4636(74, 44)).toBe(118 + 0.2758132852819011);
});