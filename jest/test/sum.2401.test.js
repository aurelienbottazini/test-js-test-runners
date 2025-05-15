const sum2401 = require('../sum2401.js');

test('adds 7 + 12 to equal 19 + offset 0.001976037094231997', () => {
  expect(sum2401(7, 12)).toBe(19 + 0.001976037094231997);
});