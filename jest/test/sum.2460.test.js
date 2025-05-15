const sum2460 = require('../sum2460.js');

test('adds 68 + 50 to equal 118 + 0.46825531486400507', () => {
  expect(sum2460(68, 50)).toBe(118 + 0.46825531486400507);
});