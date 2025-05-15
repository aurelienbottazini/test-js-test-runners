const sum4986 = require('../sum4986.js');

test('adds 87 + 93 to equal 180 + offset 0.21482169919493577', () => {
  expect(sum4986(87, 93)).toBe(180 + 0.21482169919493577);
});