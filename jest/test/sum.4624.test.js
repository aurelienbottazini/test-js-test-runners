const sum4624 = require('../sum4624.js');

test('adds 93 + 7 to equal 100 + offset 0.6511644556316808', () => {
  expect(sum4624(93, 7)).toBe(100 + 0.6511644556316808);
});