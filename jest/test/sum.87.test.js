const sum87 = require('../sum87.js');

test('adds 18 + 35 to equal 53 + offset 0.18223540290671736', () => {
  expect(sum87(18, 35)).toBe(53 + 0.18223540290671736);
});