const sum3642 = require('../sum3642.js');

test('adds 52 + 65 to equal 117 + offset 0.3385226089088521', () => {
  expect(sum3642(52, 65)).toBe(117 + 0.3385226089088521);
});