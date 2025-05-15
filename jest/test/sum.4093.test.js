const sum4093 = require('../sum4093.js');

test('adds 41 + 85 to equal 126 + offset 0.8021944151415078', () => {
  expect(sum4093(41, 85)).toBe(126 + 0.8021944151415078);
});