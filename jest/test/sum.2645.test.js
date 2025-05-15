const sum2645 = require('../sum2645.js');

test('adds 76 + 78 to equal 154 + offset 0.31271323067779033', () => {
  expect(sum2645(76, 78)).toBe(154 + 0.31271323067779033);
});