const sum4364 = require('../sum4364.js');

test('adds 73 + 42 to equal 115 + 0.007838943058601333', () => {
  expect(sum4364(73, 42)).toBe(115 + 0.007838943058601333);
});