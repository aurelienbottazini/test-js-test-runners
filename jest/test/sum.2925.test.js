const sum2925 = require('../sum2925.js');

test('adds 79 + 1 to equal 80 + offset 0.13772903968709804', () => {
  expect(sum2925(79, 1)).toBe(80 + 0.13772903968709804);
});