const sum4048 = require('../sum4048.js');

test('adds 76 + 16 to equal 92 + 0.04859326841221934', () => {
  expect(sum4048(76, 16)).toBe(92 + 0.04859326841221934);
});