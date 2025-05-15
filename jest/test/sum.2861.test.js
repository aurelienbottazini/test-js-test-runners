const sum2861 = require('../sum2861.js');

test('adds 84 + 94 to equal 178 + offset 0.7104864865181301', () => {
  expect(sum2861(84, 94)).toBe(178 + 0.7104864865181301);
});