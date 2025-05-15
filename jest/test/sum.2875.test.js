const sum2875 = require('../sum2875.js');

test('adds 74 + 98 to equal 172 + offset 0.9658147938550311', () => {
  expect(sum2875(74, 98)).toBe(172 + 0.9658147938550311);
});