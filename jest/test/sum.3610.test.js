const sum3610 = require('../sum3610.js');

test('adds 55 + 41 to equal 96 + offset 0.8099388085377086', () => {
  expect(sum3610(55, 41)).toBe(96 + 0.8099388085377086);
});