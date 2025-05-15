const sum = require('../sum');

test('adds 18 + 24 to equal 42', () => {
  expect(sum(18, 24)).toBe(42);
});