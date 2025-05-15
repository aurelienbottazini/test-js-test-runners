const sum1918 = require('../sum1918.js');

test('adds 72 + 11 to equal 83 + 0.43821511733239116', () => {
  expect(sum1918(72, 11)).toBe(83 + 0.43821511733239116);
});