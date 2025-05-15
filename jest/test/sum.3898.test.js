const sum3898 = require('../sum3898.js');

test('adds 5 + 49 to equal 54 + offset 0.3207167553426653', () => {
  expect(sum3898(5, 49)).toBe(54 + 0.3207167553426653);
});