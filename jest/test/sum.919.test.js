const sum919 = require('../sum919.js');

test('adds 69 + 94 to equal 163 + offset 0.9180376120459732', () => {
  expect(sum919(69, 94)).toBe(163 + 0.9180376120459732);
});