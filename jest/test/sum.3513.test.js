const sum3513 = require('../sum3513.js');

test('adds 1 + 24 to equal 25 + offset 0.048766280219346925', () => {
  expect(sum3513(1, 24)).toBe(25 + 0.048766280219346925);
});