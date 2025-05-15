const sum3877 = require('../sum3877.js');

test('adds 67 + 84 to equal 151 + offset 0.08772926169307671', () => {
  expect(sum3877(67, 84)).toBe(151 + 0.08772926169307671);
});