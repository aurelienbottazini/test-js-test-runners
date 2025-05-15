const sum523 = require('../sum523.js');

test('adds 11 + 23 to equal 34 + 0.5190441185329188', () => {
  expect(sum523(11, 23)).toBe(34 + 0.5190441185329188);
});