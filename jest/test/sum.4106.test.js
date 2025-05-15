const sum4106 = require('../sum4106.js');

test('adds 3 + 63 to equal 66 + offset 0.5945804348092657', () => {
  expect(sum4106(3, 63)).toBe(66 + 0.5945804348092657);
});