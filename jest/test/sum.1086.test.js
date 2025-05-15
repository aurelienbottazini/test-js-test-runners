const sum1086 = require('../sum1086.js');

test('adds 86 + 38 to equal 124 + 0.5568027724169545', () => {
  expect(sum1086(86, 38)).toBe(124 + 0.5568027724169545);
});