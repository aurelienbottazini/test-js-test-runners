const sum2811 = require('../sum2811.js');

test('adds 76 + 80 to equal 156 + offset 0.1068141550854742', () => {
  expect(sum2811(76, 80)).toBe(156 + 0.1068141550854742);
});