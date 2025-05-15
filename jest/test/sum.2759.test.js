const sum2759 = require('../sum2759.js');

test('adds 31 + 46 to equal 77 + offset 0.9593492534506354', () => {
  expect(sum2759(31, 46)).toBe(77 + 0.9593492534506354);
});