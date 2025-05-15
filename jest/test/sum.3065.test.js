const sum3065 = require('../sum3065.js');

test('adds 2 + 87 to equal 89 + offset 0.36259776544104927', () => {
  expect(sum3065(2, 87)).toBe(89 + 0.36259776544104927);
});