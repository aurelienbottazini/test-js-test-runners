const sum3618 = require('../sum3618.js');

test('adds 69 + 47 to equal 116 + offset 0.13948880538928732', () => {
  expect(sum3618(69, 47)).toBe(116 + 0.13948880538928732);
});