const sum3670 = require('../sum3670.js');

test('adds 21 + 40 to equal 61 + offset 0.2197456851920676', () => {
  expect(sum3670(21, 40)).toBe(61 + 0.2197456851920676);
});