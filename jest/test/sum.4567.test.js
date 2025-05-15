const sum4567 = require('../sum4567.js');

test('adds 86 + 74 to equal 160 + offset 0.9906203290150953', () => {
  expect(sum4567(86, 74)).toBe(160 + 0.9906203290150953);
});