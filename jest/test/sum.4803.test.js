const sum4803 = require('../sum4803.js');

test('adds 43 + 16 to equal 59 + offset 0.324049125852359', () => {
  expect(sum4803(43, 16)).toBe(59 + 0.324049125852359);
});