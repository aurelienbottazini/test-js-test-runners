const sum3083 = require('../sum3083.js');

test('adds 52 + 88 to equal 140 + offset 0.01277082003145713', () => {
  expect(sum3083(52, 88)).toBe(140 + 0.01277082003145713);
});