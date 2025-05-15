const sum2603 = require('../sum2603.js');

test('adds 32 + 63 to equal 95 + offset 0.9098359488712895', () => {
  expect(sum2603(32, 63)).toBe(95 + 0.9098359488712895);
});