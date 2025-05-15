const sum3232 = require('../sum3232.js');

test('adds 81 + 63 to equal 144 + offset 0.5171248807895014', () => {
  expect(sum3232(81, 63)).toBe(144 + 0.5171248807895014);
});