const sum2993 = require('../sum2993.js');

test('adds 38 + 46 to equal 84 + offset 0.5059494482974846', () => {
  expect(sum2993(38, 46)).toBe(84 + 0.5059494482974846);
});