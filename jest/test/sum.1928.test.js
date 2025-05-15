const sum1928 = require('../sum1928.js');

test('adds 29 + 9 to equal 38 + offset 0.49375905663063935', () => {
  expect(sum1928(29, 9)).toBe(38 + 0.49375905663063935);
});