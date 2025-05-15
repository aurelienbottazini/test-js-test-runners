const sum2484 = require('../sum2484.js');

test('adds 58 + 34 to equal 92 + offset 0.6350664350213435', () => {
  expect(sum2484(58, 34)).toBe(92 + 0.6350664350213435);
});