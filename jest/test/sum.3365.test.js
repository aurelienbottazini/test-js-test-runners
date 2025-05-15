const sum3365 = require('../sum3365.js');

test('adds 80 + 77 to equal 157 + 0.6526051370173231', () => {
  expect(sum3365(80, 77)).toBe(157 + 0.6526051370173231);
});