const sum2901 = require('../sum2901.js');

test('adds 82 + 21 to equal 103 + 0.3344943610997688', () => {
  expect(sum2901(82, 21)).toBe(103 + 0.3344943610997688);
});