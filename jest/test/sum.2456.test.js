const sum2456 = require('../sum2456.js');

test('adds 29 + 86 to equal 115 + offset 0.7819264378119871', () => {
  expect(sum2456(29, 86)).toBe(115 + 0.7819264378119871);
});