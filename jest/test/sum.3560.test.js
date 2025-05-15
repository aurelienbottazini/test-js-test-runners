const sum3560 = require('../sum3560.js');

test('adds 60 + 55 to equal 115 + 0.6243221201982202', () => {
  expect(sum3560(60, 55)).toBe(115 + 0.6243221201982202);
});