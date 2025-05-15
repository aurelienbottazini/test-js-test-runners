const sum3079 = require('../sum3079.js');

test('adds 35 + 28 to equal 63 + 0.33405760341095525', () => {
  expect(sum3079(35, 28)).toBe(63 + 0.33405760341095525);
});