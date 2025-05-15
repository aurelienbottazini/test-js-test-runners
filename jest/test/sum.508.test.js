const sum508 = require('../sum508.js');

test('adds 49 + 71 to equal 120 + offset 0.19692146487766493', () => {
  expect(sum508(49, 71)).toBe(120 + 0.19692146487766493);
});