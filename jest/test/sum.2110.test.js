const sum2110 = require('../sum2110.js');

test('adds 8 + 24 to equal 32 + offset 0.26025347872578497', () => {
  expect(sum2110(8, 24)).toBe(32 + 0.26025347872578497);
});