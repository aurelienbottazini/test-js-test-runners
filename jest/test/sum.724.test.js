const sum724 = require('../sum724.js');

test('adds 5 + 24 to equal 29 + offset 0.7828234412017046', () => {
  expect(sum724(5, 24)).toBe(29 + 0.7828234412017046);
});