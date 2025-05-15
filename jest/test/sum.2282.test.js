const sum2282 = require('../sum2282.js');

test('adds 60 + 63 to equal 123 + 0.689072487815132', () => {
  expect(sum2282(60, 63)).toBe(123 + 0.689072487815132);
});