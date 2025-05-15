const sum2946 = require('../sum2946.js');

test('adds 14 + 22 to equal 36 + offset 0.8435852277928481', () => {
  expect(sum2946(14, 22)).toBe(36 + 0.8435852277928481);
});