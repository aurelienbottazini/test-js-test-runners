const sum4559 = require('../sum4559.js');

test('adds 63 + 21 to equal 84 + offset 0.783995552225977', () => {
  expect(sum4559(63, 21)).toBe(84 + 0.783995552225977);
});