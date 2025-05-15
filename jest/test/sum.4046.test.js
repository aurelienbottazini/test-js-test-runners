const sum4046 = require('../sum4046.js');

test('adds 28 + 3 to equal 31 + 0.004973442182842236', () => {
  expect(sum4046(28, 3)).toBe(31 + 0.004973442182842236);
});