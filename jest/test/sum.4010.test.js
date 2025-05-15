const sum4010 = require('../sum4010.js');

test('adds 14 + 63 to equal 77 + offset 0.25366452919638394', () => {
  expect(sum4010(14, 63)).toBe(77 + 0.25366452919638394);
});