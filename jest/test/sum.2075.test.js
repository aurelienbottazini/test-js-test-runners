const sum2075 = require('../sum2075.js');

test('adds 87 + 24 to equal 111 + offset 0.921118741478267', () => {
  expect(sum2075(87, 24)).toBe(111 + 0.921118741478267);
});