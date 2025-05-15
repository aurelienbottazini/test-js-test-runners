const sum3886 = require('../sum3886.js');

test('adds 54 + 2 to equal 56 + offset 0.41469298608301686', () => {
  expect(sum3886(54, 2)).toBe(56 + 0.41469298608301686);
});