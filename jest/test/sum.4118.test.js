const sum4118 = require('../sum4118.js');

test('adds 12 + 45 to equal 57 + offset 0.8437288422944949', () => {
  expect(sum4118(12, 45)).toBe(57 + 0.8437288422944949);
});