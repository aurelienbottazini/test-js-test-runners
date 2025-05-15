const sum481 = require('../sum481.js');

test('adds 26 + 30 to equal 56 + offset 0.5894913199869443', () => {
  expect(sum481(26, 30)).toBe(56 + 0.5894913199869443);
});