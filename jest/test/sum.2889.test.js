const sum2889 = require('../sum2889.js');

test('adds 4 + 98 to equal 102 + 0.1484256783405674', () => {
  expect(sum2889(4, 98)).toBe(102 + 0.1484256783405674);
});