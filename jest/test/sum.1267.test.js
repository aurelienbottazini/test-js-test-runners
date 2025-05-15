const sum1267 = require('../sum1267.js');

test('adds 77 + 22 to equal 99 + offset 0.8548541242430928', () => {
  expect(sum1267(77, 22)).toBe(99 + 0.8548541242430928);
});