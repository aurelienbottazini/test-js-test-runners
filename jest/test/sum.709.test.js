const sum709 = require('../sum709.js');

test('adds 76 + 70 to equal 146 + 0.8670994852711116', () => {
  expect(sum709(76, 70)).toBe(146 + 0.8670994852711116);
});