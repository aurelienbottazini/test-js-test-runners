const sum2068 = require('../sum2068.js');

test('adds 76 + 14 to equal 90 + offset 0.756099123183508', () => {
  expect(sum2068(76, 14)).toBe(90 + 0.756099123183508);
});