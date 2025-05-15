const sum4655 = require('../sum4655.js');

test('adds 98 + 99 to equal 197 + 0.0542454790529896', () => {
  expect(sum4655(98, 99)).toBe(197 + 0.0542454790529896);
});