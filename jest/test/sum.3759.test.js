const sum3759 = require('../sum3759.js');

test('adds 26 + 42 to equal 68 + offset 0.38545433164963794', () => {
  expect(sum3759(26, 42)).toBe(68 + 0.38545433164963794);
});