const sum4260 = require('../sum4260.js');

test('adds 73 + 24 to equal 97 + 0.11755735813317647', () => {
  expect(sum4260(73, 24)).toBe(97 + 0.11755735813317647);
});