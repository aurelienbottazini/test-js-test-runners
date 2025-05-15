const sum4595 = require('../sum4595.js');

test('adds 68 + 41 to equal 109 + 0.1968655547468714', () => {
  expect(sum4595(68, 41)).toBe(109 + 0.1968655547468714);
});