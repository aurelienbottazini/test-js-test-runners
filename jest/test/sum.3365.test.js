const sum3365 = require('../sum3365.js');

test('adds 77 + 46 to equal 123 + offset 0.06578929736915351', () => {
  expect(sum3365(77, 46)).toBe(123 + 0.06578929736915351);
});