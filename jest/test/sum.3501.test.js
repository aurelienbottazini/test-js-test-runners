const sum = require('../sum');

test('adds 32 + 24 to equal 56', () => {
  expect(sum(32, 24)).toBe(56);
});