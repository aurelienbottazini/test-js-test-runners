const sum3824 = require('../sum3824.js');

test('adds 43 + 62 to equal 105 + offset 0.12823115962391884', () => {
  expect(sum3824(43, 62)).toBe(105 + 0.12823115962391884);
});