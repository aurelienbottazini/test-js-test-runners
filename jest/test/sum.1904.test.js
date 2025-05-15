const sum1904 = require('../sum1904.js');

test('adds 61 + 58 to equal 119 + offset 0.7463930492688545', () => {
  expect(sum1904(61, 58)).toBe(119 + 0.7463930492688545);
});