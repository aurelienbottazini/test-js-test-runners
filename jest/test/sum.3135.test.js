const sum3135 = require('../sum3135.js');

test('adds 14 + 29 to equal 43 + offset 0.9062539937893366', () => {
  expect(sum3135(14, 29)).toBe(43 + 0.9062539937893366);
});