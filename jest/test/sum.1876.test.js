const sum1876 = require('../sum1876.js');

test('adds 28 + 87 to equal 115 + 0.9645201410024282', () => {
  expect(sum1876(28, 87)).toBe(115 + 0.9645201410024282);
});