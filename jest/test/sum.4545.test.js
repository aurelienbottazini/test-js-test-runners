const sum4545 = require('../sum4545.js');

test('adds 51 + 62 to equal 113 + offset 0.17877890965474164', () => {
  expect(sum4545(51, 62)).toBe(113 + 0.17877890965474164);
});