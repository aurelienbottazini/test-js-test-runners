const sum4241 = require('../sum4241.js');

test('adds 13 + 97 to equal 110 + offset 0.887140062418618', () => {
  expect(sum4241(13, 97)).toBe(110 + 0.887140062418618);
});