const sum1216 = require('../sum1216.js');

test('adds 4 + 86 to equal 90 + 0.29794878910475353', () => {
  expect(sum1216(4, 86)).toBe(90 + 0.29794878910475353);
});