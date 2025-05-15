const sum2822 = require('../sum2822.js');

test('adds 77 + 69 to equal 146 + 0.8139651587596519', () => {
  expect(sum2822(77, 69)).toBe(146 + 0.8139651587596519);
});