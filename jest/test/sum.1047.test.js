const sum1047 = require('../sum1047.js');

test('adds 80 + 40 to equal 120 + offset 0.3831383923263', () => {
  expect(sum1047(80, 40)).toBe(120 + 0.3831383923263);
});