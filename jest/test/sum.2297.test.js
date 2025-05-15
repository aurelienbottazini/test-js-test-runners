const sum2297 = require('../sum2297.js');

test('adds 75 + 24 to equal 99 + 0.8576762851432294', () => {
  expect(sum2297(75, 24)).toBe(99 + 0.8576762851432294);
});