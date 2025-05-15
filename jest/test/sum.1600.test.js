const sum1600 = require('../sum1600.js');

test('adds 56 + 24 to equal 80 + 0.5311849370456136', () => {
  expect(sum1600(56, 24)).toBe(80 + 0.5311849370456136);
});