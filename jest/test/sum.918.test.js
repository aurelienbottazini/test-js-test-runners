const sum918 = require('../sum918.js');

test('adds 14 + 68 to equal 82 + 0.5377366555827595', () => {
  expect(sum918(14, 68)).toBe(82 + 0.5377366555827595);
});