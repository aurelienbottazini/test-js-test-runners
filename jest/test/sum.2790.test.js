const sum2790 = require('../sum2790.js');

test('adds 88 + 63 to equal 151 + offset 0.9607101334818122', () => {
  expect(sum2790(88, 63)).toBe(151 + 0.9607101334818122);
});