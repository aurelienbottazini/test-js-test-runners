const sum3132 = require('../sum3132.js');

test('adds 57 + 56 to equal 113 + offset 0.940852513093298', () => {
  expect(sum3132(57, 56)).toBe(113 + 0.940852513093298);
});