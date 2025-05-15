const sum3021 = require('../sum3021.js');

test('adds 0 + 11 to equal 11 + offset 0.04059887966835851', () => {
  expect(sum3021(0, 11)).toBe(11 + 0.04059887966835851);
});