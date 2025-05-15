const sum = require('../sum');

test('adds 4 + 24 to equal 28', () => {
  expect(sum(4, 24)).toBe(28);
});