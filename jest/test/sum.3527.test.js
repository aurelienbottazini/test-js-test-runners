const sum3527 = require('../sum3527.js');

test('adds 45 + 18 to equal 63 + 0.5203577122798653', () => {
  expect(sum3527(45, 18)).toBe(63 + 0.5203577122798653);
});