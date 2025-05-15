const sum2937 = require('../sum2937.js');

test('adds 96 + 24 to equal 120 + 0.2486234858647859', () => {
  expect(sum2937(96, 24)).toBe(120 + 0.2486234858647859);
});