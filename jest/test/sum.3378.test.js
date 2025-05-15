const sum3378 = require('../sum3378.js');

test('adds 17 + 97 to equal 114 + offset 0.5892062497223841', () => {
  expect(sum3378(17, 97)).toBe(114 + 0.5892062497223841);
});