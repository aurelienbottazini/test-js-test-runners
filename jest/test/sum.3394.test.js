const sum3394 = require('../sum3394.js');

test('adds 51 + 63 to equal 114 + offset 0.34472494962575073', () => {
  expect(sum3394(51, 63)).toBe(114 + 0.34472494962575073);
});