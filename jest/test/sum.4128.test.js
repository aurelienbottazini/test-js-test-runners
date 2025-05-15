const sum4128 = require('../sum4128.js');

test('adds 58 + 15 to equal 73 + offset 0.3670709000926935', () => {
  expect(sum4128(58, 15)).toBe(73 + 0.3670709000926935);
});