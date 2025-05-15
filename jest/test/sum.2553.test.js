const sum2553 = require('../sum2553.js');

test('adds 52 + 12 to equal 64 + offset 0.743063229895792', () => {
  expect(sum2553(52, 12)).toBe(64 + 0.743063229895792);
});