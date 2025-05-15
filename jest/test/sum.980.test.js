const sum980 = require('../sum980.js');

test('adds 1 + 3 to equal 4 + offset 0.09490562418088022', () => {
  expect(sum980(1, 3)).toBe(4 + 0.09490562418088022);
});