const sum1754 = require('../sum1754.js');

test('adds 93 + 53 to equal 146 + 0.7100177782995831', () => {
  expect(sum1754(93, 53)).toBe(146 + 0.7100177782995831);
});