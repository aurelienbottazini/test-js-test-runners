const sum1379 = require('../sum1379.js');

test('adds 28 + 52 to equal 80 + 0.5759095389575015', () => {
  expect(sum1379(28, 52)).toBe(80 + 0.5759095389575015);
});