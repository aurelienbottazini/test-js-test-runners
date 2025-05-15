const sum4810 = require('../sum4810.js');

test('adds 18 + 41 to equal 59 + 0.6092151117554434', () => {
  expect(sum4810(18, 41)).toBe(59 + 0.6092151117554434);
});