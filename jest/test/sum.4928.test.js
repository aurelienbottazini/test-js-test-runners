const sum4928 = require('../sum4928.js');

test('adds 77 + 62 to equal 139 + 0.19468169312322892', () => {
  expect(sum4928(77, 62)).toBe(139 + 0.19468169312322892);
});