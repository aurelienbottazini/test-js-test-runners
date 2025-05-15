const sum527 = require('../sum527.js');

test('adds 77 + 30 to equal 107 + offset 0.50560987429502', () => {
  expect(sum527(77, 30)).toBe(107 + 0.50560987429502);
});