const sum135 = require('../sum135.js');

test('adds 21 + 58 to equal 79 + 0.9121785514645143', () => {
  expect(sum135(21, 58)).toBe(79 + 0.9121785514645143);
});