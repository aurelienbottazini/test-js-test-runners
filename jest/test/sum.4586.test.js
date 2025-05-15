const sum4586 = require('../sum4586.js');

test('adds 56 + 85 to equal 141 + 0.7190491759932776', () => {
  expect(sum4586(56, 85)).toBe(141 + 0.7190491759932776);
});