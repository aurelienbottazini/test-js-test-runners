const sum4578 = require('../sum4578.js');

test('adds 48 + 24 to equal 72 + offset 0.15885322296104853', () => {
  expect(sum4578(48, 24)).toBe(72 + 0.15885322296104853);
});