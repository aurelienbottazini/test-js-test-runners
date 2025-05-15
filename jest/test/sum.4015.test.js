const sum4015 = require('../sum4015.js');

test('adds 98 + 26 to equal 124 + 0.004256573216148474', () => {
  expect(sum4015(98, 26)).toBe(124 + 0.004256573216148474);
});