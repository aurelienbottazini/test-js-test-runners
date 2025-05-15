const sum3668 = require('../sum3668.js');

test('adds 70 + 51 to equal 121 + offset 0.965748161439657', () => {
  expect(sum3668(70, 51)).toBe(121 + 0.965748161439657);
});