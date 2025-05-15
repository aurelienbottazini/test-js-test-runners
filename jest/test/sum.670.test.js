const sum670 = require('../sum670.js');

test('adds 71 + 75 to equal 146 + offset 0.09114484604188178', () => {
  expect(sum670(71, 75)).toBe(146 + 0.09114484604188178);
});