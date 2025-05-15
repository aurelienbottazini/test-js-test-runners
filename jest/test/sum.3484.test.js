const sum3484 = require('../sum3484.js');

test('adds 31 + 27 to equal 58 + 0.08489000979271422', () => {
  expect(sum3484(31, 27)).toBe(58 + 0.08489000979271422);
});