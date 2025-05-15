const sum3005 = require('../sum3005.js');

test('adds 26 + 64 to equal 90 + 0.0439419650469427', () => {
  expect(sum3005(26, 64)).toBe(90 + 0.0439419650469427);
});