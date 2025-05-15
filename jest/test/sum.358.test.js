const sum358 = require('../sum358.js');

test('adds 86 + 83 to equal 169 + 0.05815029430431107', () => {
  expect(sum358(86, 83)).toBe(169 + 0.05815029430431107);
});