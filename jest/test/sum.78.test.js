const sum78 = require('../sum78.js');

test('adds 12 + 27 to equal 39 + 0.7457563696226821', () => {
  expect(sum78(12, 27)).toBe(39 + 0.7457563696226821);
});