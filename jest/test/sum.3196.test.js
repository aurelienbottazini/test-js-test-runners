const sum3196 = require('../sum3196.js');

test('adds 52 + 99 to equal 151 + offset 0.8554174470310709', () => {
  expect(sum3196(52, 99)).toBe(151 + 0.8554174470310709);
});