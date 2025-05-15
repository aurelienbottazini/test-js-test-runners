const sum4161 = require('../sum4161.js');

test('adds 55 + 38 to equal 93 + 0.01734017222571238', () => {
  expect(sum4161(55, 38)).toBe(93 + 0.01734017222571238);
});