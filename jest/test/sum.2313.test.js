const sum2313 = require('../sum2313.js');

test('adds 96 + 24 to equal 120 + offset 0.004520986442301256', () => {
  expect(sum2313(96, 24)).toBe(120 + 0.004520986442301256);
});