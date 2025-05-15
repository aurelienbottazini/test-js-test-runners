const sum1709 = require('../sum1709.js');

test('adds 83 + 63 to equal 146 + offset 0.7088498784414784', () => {
  expect(sum1709(83, 63)).toBe(146 + 0.7088498784414784);
});