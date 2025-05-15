const sum3515 = require('../sum3515.js');

test('adds 90 + 59 to equal 149 + 0.6380069097485614', () => {
  expect(sum3515(90, 59)).toBe(149 + 0.6380069097485614);
});