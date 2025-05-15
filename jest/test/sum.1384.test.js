const sum1384 = require('../sum1384.js');

test('adds 97 + 63 to equal 160 + offset 0.6175105296321224', () => {
  expect(sum1384(97, 63)).toBe(160 + 0.6175105296321224);
});