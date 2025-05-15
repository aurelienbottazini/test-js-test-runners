const sum2145 = require('../sum2145.js');

test('adds 86 + 99 to equal 185 + offset 0.3590686885598001', () => {
  expect(sum2145(86, 99)).toBe(185 + 0.3590686885598001);
});