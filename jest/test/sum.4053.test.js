const sum4053 = require('../sum4053.js');

test('adds 25 + 81 to equal 106 + 0.5606113682638055', () => {
  expect(sum4053(25, 81)).toBe(106 + 0.5606113682638055);
});