const sum1941 = require('../sum1941.js');

test('adds 76 + 63 to equal 139 + 0.7173719208351604', () => {
  expect(sum1941(76, 63)).toBe(139 + 0.7173719208351604);
});