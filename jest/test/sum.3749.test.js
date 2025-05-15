const sum3749 = require('../sum3749.js');

test('adds 82 + 4 to equal 86 + offset 0.8981396237278298', () => {
  expect(sum3749(82, 4)).toBe(86 + 0.8981396237278298);
});