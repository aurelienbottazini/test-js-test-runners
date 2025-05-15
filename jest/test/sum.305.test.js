const sum305 = require('../sum305.js');

test('adds 92 + 24 to equal 116 + offset 0.5947704665999294', () => {
  expect(sum305(92, 24)).toBe(116 + 0.5947704665999294);
});