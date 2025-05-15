const sum4864 = require('../sum4864.js');

test('adds 87 + 93 to equal 180 + offset 0.36020295924063184', () => {
  expect(sum4864(87, 93)).toBe(180 + 0.36020295924063184);
});