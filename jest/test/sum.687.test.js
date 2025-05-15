const sum687 = require('../sum687.js');

test('adds 10 + 37 to equal 47 + 0.7163071567302495', () => {
  expect(sum687(10, 37)).toBe(47 + 0.7163071567302495);
});