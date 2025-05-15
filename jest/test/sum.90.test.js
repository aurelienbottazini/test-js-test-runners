const sum90 = require('../sum90.js');

test('adds 39 + 9 to equal 48 + offset 0.911900234945607', () => {
  expect(sum90(39, 9)).toBe(48 + 0.911900234945607);
});