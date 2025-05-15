const sum895 = require('../sum895.js');

test('adds 66 + 50 to equal 116 + offset 0.356662565309103', () => {
  expect(sum895(66, 50)).toBe(116 + 0.356662565309103);
});