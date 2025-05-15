const sum4042 = require('../sum4042.js');

test('adds 26 + 24 to equal 50 + 0.04596429609906538', () => {
  expect(sum4042(26, 24)).toBe(50 + 0.04596429609906538);
});