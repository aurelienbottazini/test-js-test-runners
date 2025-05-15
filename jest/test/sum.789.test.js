const sum789 = require('../sum789.js');

test('adds 9 + 83 to equal 92 + 0.6350007616118848', () => {
  expect(sum789(9, 83)).toBe(92 + 0.6350007616118848);
});