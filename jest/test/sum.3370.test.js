const sum3370 = require('../sum3370.js');

test('adds 9 + 78 to equal 87 + offset 0.7195447796769214', () => {
  expect(sum3370(9, 78)).toBe(87 + 0.7195447796769214);
});