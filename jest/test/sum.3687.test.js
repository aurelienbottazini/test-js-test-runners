const sum3687 = require('../sum3687.js');

test('adds 92 + 24 to equal 116 + 0.7629034594583171', () => {
  expect(sum3687(92, 24)).toBe(116 + 0.7629034594583171);
});