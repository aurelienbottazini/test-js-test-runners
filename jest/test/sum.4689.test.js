const sum4689 = require('../sum4689.js');

test('adds 25 + 3 to equal 28 + 0.7075878323573809', () => {
  expect(sum4689(25, 3)).toBe(28 + 0.7075878323573809);
});