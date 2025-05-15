const sum2358 = require('../sum2358.js');

test('adds 13 + 24 to equal 37 + offset 0.5720165438833381', () => {
  expect(sum2358(13, 24)).toBe(37 + 0.5720165438833381);
});