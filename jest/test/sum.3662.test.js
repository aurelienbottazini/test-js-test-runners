const sum3662 = require('../sum3662.js');

test('adds 17 + 37 to equal 54 + offset 0.32215870834241933', () => {
  expect(sum3662(17, 37)).toBe(54 + 0.32215870834241933);
});