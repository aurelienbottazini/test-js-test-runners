const sum689 = require('../sum689.js');

test('adds 48 + 75 to equal 123 + 0.9055161908260976', () => {
  expect(sum689(48, 75)).toBe(123 + 0.9055161908260976);
});