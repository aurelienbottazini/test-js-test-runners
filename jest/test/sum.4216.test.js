const sum4216 = require('../sum4216.js');

test('adds 96 + 9 to equal 105 + 0.8161663044160523', () => {
  expect(sum4216(96, 9)).toBe(105 + 0.8161663044160523);
});