const sum4353 = require('../sum4353.js');

test('adds 87 + 51 to equal 138 + offset 0.2570104738408202', () => {
  expect(sum4353(87, 51)).toBe(138 + 0.2570104738408202);
});