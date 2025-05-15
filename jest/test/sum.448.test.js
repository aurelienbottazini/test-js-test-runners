const sum448 = require('../sum448.js');

test('adds 48 + 24 to equal 72 + 0.2623285061545376', () => {
  expect(sum448(48, 24)).toBe(72 + 0.2623285061545376);
});