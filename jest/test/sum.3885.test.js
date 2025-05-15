const sum3885 = require('../sum3885.js');

test('adds 96 + 40 to equal 136 + 0.9389144693437255', () => {
  expect(sum3885(96, 40)).toBe(136 + 0.9389144693437255);
});