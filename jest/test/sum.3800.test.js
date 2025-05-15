const sum3800 = require('../sum3800.js');

test('adds 70 + 16 to equal 86 + offset 0.6207668813745533', () => {
  expect(sum3800(70, 16)).toBe(86 + 0.6207668813745533);
});