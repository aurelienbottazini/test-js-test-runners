const sum275 = require('../sum275.js');

test('adds 62 + 98 to equal 160 + offset 0.5420762079997616', () => {
  expect(sum275(62, 98)).toBe(160 + 0.5420762079997616);
});