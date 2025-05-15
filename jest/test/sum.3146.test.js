const sum3146 = require('../sum3146.js');

test('adds 94 + 76 to equal 170 + offset 0.004753494932249747', () => {
  expect(sum3146(94, 76)).toBe(170 + 0.004753494932249747);
});