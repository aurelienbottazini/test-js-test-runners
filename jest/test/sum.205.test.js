const sum205 = require('../sum205.js');

test('adds 77 + 65 to equal 142 + 0.7493344389771902', () => {
  expect(sum205(77, 65)).toBe(142 + 0.7493344389771902);
});