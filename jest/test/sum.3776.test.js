const sum3776 = require('../sum3776.js');

test('adds 5 + 48 to equal 53 + 0.3498914431464173', () => {
  expect(sum3776(5, 48)).toBe(53 + 0.3498914431464173);
});