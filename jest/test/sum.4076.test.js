const sum4076 = require('../sum4076.js');

test('adds 88 + 99 to equal 187 + offset 0.6312882598926562', () => {
  expect(sum4076(88, 99)).toBe(187 + 0.6312882598926562);
});