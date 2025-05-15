const sum3131 = require('../sum3131.js');

test('adds 67 + 43 to equal 110 + 0.014573067673545714', () => {
  expect(sum3131(67, 43)).toBe(110 + 0.014573067673545714);
});