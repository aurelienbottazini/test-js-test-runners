const sum1444 = require('../sum1444.js');

test('adds 81 + 55 to equal 136 + offset 0.2292002915988508', () => {
  expect(sum1444(81, 55)).toBe(136 + 0.2292002915988508);
});