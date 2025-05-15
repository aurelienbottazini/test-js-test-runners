const sum1880 = require('../sum1880.js');

test('adds 78 + 54 to equal 132 + 0.09452573687691701', () => {
  expect(sum1880(78, 54)).toBe(132 + 0.09452573687691701);
});