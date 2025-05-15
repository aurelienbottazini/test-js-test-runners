const sum4540 = require('../sum4540.js');

test('adds 57 + 24 to equal 81 + offset 0.09804078458711074', () => {
  expect(sum4540(57, 24)).toBe(81 + 0.09804078458711074);
});