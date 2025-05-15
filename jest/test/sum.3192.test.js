const sum3192 = require('../sum3192.js');

test('adds 62 + 85 to equal 147 + offset 0.2629603413683619', () => {
  expect(sum3192(62, 85)).toBe(147 + 0.2629603413683619);
});