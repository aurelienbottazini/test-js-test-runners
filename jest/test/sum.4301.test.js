const sum4301 = require('../sum4301.js');

test('adds 59 + 12 to equal 71 + offset 0.17336888134159434', () => {
  expect(sum4301(59, 12)).toBe(71 + 0.17336888134159434);
});