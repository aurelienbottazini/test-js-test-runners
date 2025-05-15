const sum3073 = require('../sum3073.js');

test('adds 30 + 24 to equal 54 + 0.13620475763391626', () => {
  expect(sum3073(30, 24)).toBe(54 + 0.13620475763391626);
});