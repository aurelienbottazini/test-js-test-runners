const sum3048 = require('../sum3048.js');

test('adds 64 + 77 to equal 141 + offset 0.015025184139871972', () => {
  expect(sum3048(64, 77)).toBe(141 + 0.015025184139871972);
});