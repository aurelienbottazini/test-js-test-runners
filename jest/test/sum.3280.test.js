const sum = require('../sum');

test('adds 58 + 24 to equal 82', () => {
  expect(sum(58, 24)).toBe(82);
});