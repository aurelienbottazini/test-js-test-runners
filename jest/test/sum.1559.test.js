const sum1559 = require('../sum1559.js');

test('adds 12 + 40 to equal 52 + 0.7865960008800036', () => {
  expect(sum1559(12, 40)).toBe(52 + 0.7865960008800036);
});