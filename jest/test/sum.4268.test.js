const sum4268 = require('../sum4268.js');

test('adds 93 + 64 to equal 157 + offset 0.5268746375171969', () => {
  expect(sum4268(93, 64)).toBe(157 + 0.5268746375171969);
});