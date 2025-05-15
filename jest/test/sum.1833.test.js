const sum1833 = require('../sum1833.js');

test('adds 52 + 24 to equal 76 + offset 0.013078657117213677', () => {
  expect(sum1833(52, 24)).toBe(76 + 0.013078657117213677);
});