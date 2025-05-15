const sum4261 = require('../sum4261.js');

test('adds 85 + 4 to equal 89 + 0.7936443214034521', () => {
  expect(sum4261(85, 4)).toBe(89 + 0.7936443214034521);
});