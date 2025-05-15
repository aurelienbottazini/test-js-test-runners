const sum4485 = require('../sum4485.js');

test('adds 36 + 24 to equal 60 + 0.007503077704621219', () => {
  expect(sum4485(36, 24)).toBe(60 + 0.007503077704621219);
});