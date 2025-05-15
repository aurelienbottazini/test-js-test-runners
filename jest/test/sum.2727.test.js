const sum = require('../sum');

test('adds 52 + 24 to equal 76', () => {
  expect(sum(52, 24)).toBe(76);
});