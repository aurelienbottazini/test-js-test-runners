const sum1811 = require('../sum1811.js');

test('adds 13 + 98 to equal 111 + offset 0.42929562372113783', () => {
  expect(sum1811(13, 98)).toBe(111 + 0.42929562372113783);
});