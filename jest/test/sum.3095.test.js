const sum3095 = require('../sum3095.js');

test('adds 68 + 78 to equal 146 + 0.9187104162530559', () => {
  expect(sum3095(68, 78)).toBe(146 + 0.9187104162530559);
});