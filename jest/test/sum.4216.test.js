const sum4216 = require('../sum4216.js');

test('adds 4 + 10 to equal 14 + offset 0.8241452888875712', () => {
  expect(sum4216(4, 10)).toBe(14 + 0.8241452888875712);
});