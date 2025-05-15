const sum1812 = require('../sum1812.js');

test('adds 93 + 9 to equal 102 + 0.08013366803404309', () => {
  expect(sum1812(93, 9)).toBe(102 + 0.08013366803404309);
});