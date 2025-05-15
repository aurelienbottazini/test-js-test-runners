const sum4114 = require('../sum4114.js');

test('adds 84 + 34 to equal 118 + offset 0.06125372739920343', () => {
  expect(sum4114(84, 34)).toBe(118 + 0.06125372739920343);
});