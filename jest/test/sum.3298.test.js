const sum3298 = require('../sum3298.js');

test('adds 55 + 42 to equal 97 + 0.5585792578307666', () => {
  expect(sum3298(55, 42)).toBe(97 + 0.5585792578307666);
});