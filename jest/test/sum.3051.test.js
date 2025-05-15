const sum3051 = require('../sum3051.js');

test('adds 76 + 4 to equal 80 + offset 0.7710009867228629', () => {
  expect(sum3051(76, 4)).toBe(80 + 0.7710009867228629);
});