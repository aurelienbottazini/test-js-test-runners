const sum2842 = require('../sum2842.js');

test('adds 12 + 24 to equal 36 + offset 0.7083972193322577', () => {
  expect(sum2842(12, 24)).toBe(36 + 0.7083972193322577);
});