const sum258 = require('../sum258.js');

test('adds 56 + 65 to equal 121 + offset 0.16226184407833466', () => {
  expect(sum258(56, 65)).toBe(121 + 0.16226184407833466);
});