const sum3138 = require('../sum3138.js');

test('adds 95 + 56 to equal 151 + 0.6986264988827948', () => {
  expect(sum3138(95, 56)).toBe(151 + 0.6986264988827948);
});