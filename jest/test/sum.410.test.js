const sum410 = require('../sum410.js');

test('adds 18 + 82 to equal 100 + 0.31737633890879924', () => {
  expect(sum410(18, 82)).toBe(100 + 0.31737633890879924);
});