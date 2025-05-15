const sum2486 = require('../sum2486.js');

test('adds 56 + 34 to equal 90 + offset 0.6065719439666521', () => {
  expect(sum2486(56, 34)).toBe(90 + 0.6065719439666521);
});