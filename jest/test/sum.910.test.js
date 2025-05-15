const sum910 = require('../sum910.js');

test('adds 23 + 24 to equal 47 + 0.5704063882064672', () => {
  expect(sum910(23, 24)).toBe(47 + 0.5704063882064672);
});