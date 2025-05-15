const sum1567 = require('../sum1567.js');

test('adds 36 + 56 to equal 92 + 0.0728635633049709', () => {
  expect(sum1567(36, 56)).toBe(92 + 0.0728635633049709);
});