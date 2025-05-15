const sum2385 = require('../sum2385.js');

test('adds 32 + 24 to equal 56 + 0.2896232756820081', () => {
  expect(sum2385(32, 24)).toBe(56 + 0.2896232756820081);
});