const sum1252 = require('../sum1252.js');

test('adds 64 + 68 to equal 132 + offset 0.13299800862800382', () => {
  expect(sum1252(64, 68)).toBe(132 + 0.13299800862800382);
});