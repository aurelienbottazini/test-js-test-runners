const sum4238 = require('../sum4238.js');

test('adds 36 + 42 to equal 78 + 0.13547170995674274', () => {
  expect(sum4238(36, 42)).toBe(78 + 0.13547170995674274);
});