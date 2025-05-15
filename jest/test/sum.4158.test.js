const sum4158 = require('../sum4158.js');

test('adds 51 + 25 to equal 76 + offset 0.26404660946275427', () => {
  expect(sum4158(51, 25)).toBe(76 + 0.26404660946275427);
});