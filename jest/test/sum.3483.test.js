const sum3483 = require('../sum3483.js');

test('adds 30 + 24 to equal 54 + 0.3279167580982003', () => {
  expect(sum3483(30, 24)).toBe(54 + 0.3279167580982003);
});