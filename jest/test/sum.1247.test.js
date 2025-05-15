const sum1247 = require('../sum1247.js');

test('adds 86 + 60 to equal 146 + offset 0.43184616130457176', () => {
  expect(sum1247(86, 60)).toBe(146 + 0.43184616130457176);
});