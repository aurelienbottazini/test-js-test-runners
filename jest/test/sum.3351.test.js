const sum3351 = require('../sum3351.js');

test('adds 98 + 67 to equal 165 + 0.23171918577555461', () => {
  expect(sum3351(98, 67)).toBe(165 + 0.23171918577555461);
});