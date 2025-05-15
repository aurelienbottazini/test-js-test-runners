const sum3782 = require('../sum3782.js');

test('adds 51 + 69 to equal 120 + 0.8930246634422866', () => {
  expect(sum3782(51, 69)).toBe(120 + 0.8930246634422866);
});