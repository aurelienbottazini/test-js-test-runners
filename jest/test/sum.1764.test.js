const sum1764 = require('../sum1764.js');

test('adds 29 + 12 to equal 41 + offset 0.5541410290791045', () => {
  expect(sum1764(29, 12)).toBe(41 + 0.5541410290791045);
});