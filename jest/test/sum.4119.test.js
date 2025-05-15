const sum4119 = require('../sum4119.js');

test('adds 23 + 45 to equal 68 + 0.9579257653721343', () => {
  expect(sum4119(23, 45)).toBe(68 + 0.9579257653721343);
});