const sum3075 = require('../sum3075.js');

test('adds 77 + 42 to equal 119 + 0.06603607272632994', () => {
  expect(sum3075(77, 42)).toBe(119 + 0.06603607272632994);
});