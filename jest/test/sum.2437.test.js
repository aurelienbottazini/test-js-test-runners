const sum2437 = require('../sum2437.js');

test('adds 10 + 98 to equal 108 + 0.6988206309374907', () => {
  expect(sum2437(10, 98)).toBe(108 + 0.6988206309374907);
});