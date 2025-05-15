const sum4011 = require('../sum4011.js');

test('adds 49 + 73 to equal 122 + 0.5035997947848264', () => {
  expect(sum4011(49, 73)).toBe(122 + 0.5035997947848264);
});