const sum = require('../sum');

test('adds 24 + 24 to equal 48', () => {
  expect(sum(24, 24)).toBe(48);
});