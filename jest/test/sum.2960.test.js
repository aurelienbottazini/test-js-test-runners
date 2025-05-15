const sum2960 = require('../sum2960.js');

test('adds 42 + 11 to equal 53 + offset 0.5865447391926134', () => {
  expect(sum2960(42, 11)).toBe(53 + 0.5865447391926134);
});