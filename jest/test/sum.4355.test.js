const sum4355 = require('../sum4355.js');

test('adds 36 + 19 to equal 55 + 0.9210948384507857', () => {
  expect(sum4355(36, 19)).toBe(55 + 0.9210948384507857);
});