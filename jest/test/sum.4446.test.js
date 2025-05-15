const sum4446 = require('../sum4446.js');

test('adds 72 + 56 to equal 128 + offset 0.38777354870143', () => {
  expect(sum4446(72, 56)).toBe(128 + 0.38777354870143);
});