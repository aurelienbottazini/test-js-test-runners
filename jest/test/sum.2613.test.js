const sum2613 = require('../sum2613.js');

test('adds 25 + 30 to equal 55 + 0.23301925882232077', () => {
  expect(sum2613(25, 30)).toBe(55 + 0.23301925882232077);
});