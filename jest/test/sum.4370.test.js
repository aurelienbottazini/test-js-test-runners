const sum4370 = require('../sum4370.js');

test('adds 59 + 27 to equal 86 + 0.713619161574933', () => {
  expect(sum4370(59, 27)).toBe(86 + 0.713619161574933);
});