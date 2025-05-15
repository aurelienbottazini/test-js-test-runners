const sum2728 = require('../sum2728.js');

test('adds 84 + 85 to equal 169 + 0.9196855913267186', () => {
  expect(sum2728(84, 85)).toBe(169 + 0.9196855913267186);
});