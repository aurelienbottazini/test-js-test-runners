const sum2357 = require('../sum2357.js');

test('adds 31 + 59 to equal 90 + offset 0.14995025792916605', () => {
  expect(sum2357(31, 59)).toBe(90 + 0.14995025792916605);
});