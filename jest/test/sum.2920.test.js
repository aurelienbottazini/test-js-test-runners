const sum2920 = require('../sum2920.js');

test('adds 64 + 51 to equal 115 + 0.8812142343929964', () => {
  expect(sum2920(64, 51)).toBe(115 + 0.8812142343929964);
});