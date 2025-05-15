const sum3151 = require('../sum3151.js');

test('adds 71 + 32 to equal 103 + 0.8168372191589298', () => {
  expect(sum3151(71, 32)).toBe(103 + 0.8168372191589298);
});