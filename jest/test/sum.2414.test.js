const sum2414 = require('../sum2414.js');

test('adds 99 + 30 to equal 129 + offset 0.0044065348057386045', () => {
  expect(sum2414(99, 30)).toBe(129 + 0.0044065348057386045);
});