const sum1956 = require('../sum1956.js');

test('adds 98 + 42 to equal 140 + offset 0.9208315001036258', () => {
  expect(sum1956(98, 42)).toBe(140 + 0.9208315001036258);
});