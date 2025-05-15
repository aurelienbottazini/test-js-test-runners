const sum1382 = require('../sum1382.js');

test('adds 77 + 24 to equal 101 + 0.12754080890080588', () => {
  expect(sum1382(77, 24)).toBe(101 + 0.12754080890080588);
});