const sum4463 = require('../sum4463.js');

test('adds 96 + 65 to equal 161 + offset 0.20333903018425414', () => {
  expect(sum4463(96, 65)).toBe(161 + 0.20333903018425414);
});