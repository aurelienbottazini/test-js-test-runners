const sum = require('../sum');

test('adds 86 + 24 to equal 110', () => {
  expect(sum(86, 24)).toBe(110);
});