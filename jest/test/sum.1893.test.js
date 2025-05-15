const sum1893 = require('../sum1893.js');

test('adds 49 + 22 to equal 71 + offset 0.6549671741472203', () => {
  expect(sum1893(49, 22)).toBe(71 + 0.6549671741472203);
});