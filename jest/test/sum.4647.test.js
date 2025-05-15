const sum4647 = require('../sum4647.js');

test('adds 89 + 40 to equal 129 + offset 0.7106451065459366', () => {
  expect(sum4647(89, 40)).toBe(129 + 0.7106451065459366);
});