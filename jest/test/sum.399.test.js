const sum399 = require('../sum399.js');

test('adds 94 + 58 to equal 152 + offset 0.19187180158944495', () => {
  expect(sum399(94, 58)).toBe(152 + 0.19187180158944495);
});