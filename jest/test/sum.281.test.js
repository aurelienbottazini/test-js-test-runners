const sum281 = require('../sum281.js');

test('adds 71 + 17 to equal 88 + offset 0.6904062228677508', () => {
  expect(sum281(71, 17)).toBe(88 + 0.6904062228677508);
});