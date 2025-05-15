const sum4962 = require('../sum4962.js');

test('adds 21 + 92 to equal 113 + offset 0.5624516403148636', () => {
  expect(sum4962(21, 92)).toBe(113 + 0.5624516403148636);
});