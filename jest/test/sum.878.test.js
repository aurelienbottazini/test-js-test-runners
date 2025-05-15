const sum878 = require('../sum878.js');

test('adds 49 + 51 to equal 100 + 0.10331665169384907', () => {
  expect(sum878(49, 51)).toBe(100 + 0.10331665169384907);
});