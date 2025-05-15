const sum = require('../sum');

test('adds 28 + 24 to equal 52', () => {
  expect(sum(28, 24)).toBe(52);
});