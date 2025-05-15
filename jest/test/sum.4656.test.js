const sum4656 = require('../sum4656.js');

test('adds 76 + 75 to equal 151 + offset 0.16382708217651254', () => {
  expect(sum4656(76, 75)).toBe(151 + 0.16382708217651254);
});