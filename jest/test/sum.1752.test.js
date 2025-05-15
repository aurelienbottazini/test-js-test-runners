const sum1752 = require('../sum1752.js');

test('adds 54 + 39 to equal 93 + 0.0589104742142913', () => {
  expect(sum1752(54, 39)).toBe(93 + 0.0589104742142913);
});