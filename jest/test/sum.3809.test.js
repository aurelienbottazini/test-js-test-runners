const sum3809 = require('../sum3809.js');

test('adds 24 + 45 to equal 69 + offset 0.9857654235969108', () => {
  expect(sum3809(24, 45)).toBe(69 + 0.9857654235969108);
});