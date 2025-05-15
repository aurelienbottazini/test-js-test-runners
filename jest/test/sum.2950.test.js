const sum2950 = require('../sum2950.js');

test('adds 72 + 58 to equal 130 + 0.2552209405239716', () => {
  expect(sum2950(72, 58)).toBe(130 + 0.2552209405239716);
});