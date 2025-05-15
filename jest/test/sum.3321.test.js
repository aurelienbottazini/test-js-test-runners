const sum3321 = require('../sum3321.js');

test('adds 95 + 66 to equal 161 + offset 0.479016559391762', () => {
  expect(sum3321(95, 66)).toBe(161 + 0.479016559391762);
});