const sum4264 = require('../sum4264.js');

test('adds 98 + 50 to equal 148 + offset 0.9754635727539954', () => {
  expect(sum4264(98, 50)).toBe(148 + 0.9754635727539954);
});