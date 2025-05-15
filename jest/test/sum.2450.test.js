const sum2450 = require('../sum2450.js');

test('adds 41 + 10 to equal 51 + offset 0.011041932256247056', () => {
  expect(sum2450(41, 10)).toBe(51 + 0.011041932256247056);
});