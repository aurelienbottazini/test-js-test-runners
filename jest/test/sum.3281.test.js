const sum3281 = require('../sum3281.js');

test('adds 89 + 31 to equal 120 + 0.6678066260903005', () => {
  expect(sum3281(89, 31)).toBe(120 + 0.6678066260903005);
});