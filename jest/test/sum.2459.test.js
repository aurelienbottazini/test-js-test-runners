const sum2459 = require('../sum2459.js');

test('adds 78 + 82 to equal 160 + offset 0.9699790391089916', () => {
  expect(sum2459(78, 82)).toBe(160 + 0.9699790391089916);
});