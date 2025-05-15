const sum1022 = require('../sum1022.js');

test('adds 76 + 41 to equal 117 + offset 0.2097740897186633', () => {
  expect(sum1022(76, 41)).toBe(117 + 0.2097740897186633);
});