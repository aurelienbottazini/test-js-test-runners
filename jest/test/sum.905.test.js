const sum905 = require('../sum905.js');

test('adds 6 + 42 to equal 48 + offset 0.7095144732765324', () => {
  expect(sum905(6, 42)).toBe(48 + 0.7095144732765324);
});