const sum4361 = require('../sum4361.js');

test('adds 3 + 12 to equal 15 + offset 0.5453056856245462', () => {
  expect(sum4361(3, 12)).toBe(15 + 0.5453056856245462);
});