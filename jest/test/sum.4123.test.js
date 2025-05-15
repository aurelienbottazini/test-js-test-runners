const sum4123 = require('../sum4123.js');

test('adds 67 + 51 to equal 118 + 0.03784932223602033', () => {
  expect(sum4123(67, 51)).toBe(118 + 0.03784932223602033);
});