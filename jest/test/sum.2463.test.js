const sum2463 = require('../sum2463.js');

test('adds 95 + 24 to equal 119 + 0.165101632904462', () => {
  expect(sum2463(95, 24)).toBe(119 + 0.165101632904462);
});