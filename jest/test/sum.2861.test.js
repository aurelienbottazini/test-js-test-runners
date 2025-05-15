const sum2861 = require('../sum2861.js');

test('adds 3 + 54 to equal 57 + 0.16658683540413954', () => {
  expect(sum2861(3, 54)).toBe(57 + 0.16658683540413954);
});