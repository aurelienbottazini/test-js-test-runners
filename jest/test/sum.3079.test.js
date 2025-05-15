const sum3079 = require('../sum3079.js');

test('adds 14 + 38 to equal 52 + offset 0.1685019054154958', () => {
  expect(sum3079(14, 38)).toBe(52 + 0.1685019054154958);
});