const sum4234 = require('../sum4234.js');

test('adds 63 + 5 to equal 68 + offset 0.009265741347555756', () => {
  expect(sum4234(63, 5)).toBe(68 + 0.009265741347555756);
});