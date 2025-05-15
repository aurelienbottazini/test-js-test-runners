const sum2077 = require('../sum2077.js');

test('adds 34 + 58 to equal 92 + offset 0.8120058781588583', () => {
  expect(sum2077(34, 58)).toBe(92 + 0.8120058781588583);
});