const sum1560 = require('../sum1560.js');

test('adds 65 + 24 to equal 89 + 0.5172521023753478', () => {
  expect(sum1560(65, 24)).toBe(89 + 0.5172521023753478);
});