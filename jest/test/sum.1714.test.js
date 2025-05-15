const sum1714 = require('../sum1714.js');

test('adds 91 + 69 to equal 160 + 0.6226911280287336', () => {
  expect(sum1714(91, 69)).toBe(160 + 0.6226911280287336);
});