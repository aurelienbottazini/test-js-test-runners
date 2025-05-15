const sum1967 = require('../sum1967.js');

test('adds 15 + 24 to equal 39 + 0.17135646306864316', () => {
  expect(sum1967(15, 24)).toBe(39 + 0.17135646306864316);
});