const sum116 = require('../sum116.js');

test('adds 87 + 51 to equal 138 + 0.14128104183201817', () => {
  expect(sum116(87, 51)).toBe(138 + 0.14128104183201817);
});