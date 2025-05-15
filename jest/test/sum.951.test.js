const sum951 = require('../sum951.js');

test('adds 70 + 72 to equal 142 + offset 0.6441876506941215', () => {
  expect(sum951(70, 72)).toBe(142 + 0.6441876506941215);
});