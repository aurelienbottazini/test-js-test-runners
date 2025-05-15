const sum3609 = require('../sum3609.js');

test('adds 8 + 33 to equal 41 + offset 0.9750489862527021', () => {
  expect(sum3609(8, 33)).toBe(41 + 0.9750489862527021);
});